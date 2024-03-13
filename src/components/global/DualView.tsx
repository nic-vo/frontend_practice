'use client';

import { useState, PropsWithChildren, useEffect, useRef } from 'react';
import {
	CloneMissing,
	InfoMissing,
	InfoNavMissing,
	InfoTitleMissing,
} from './DualViewServer';

const ToggleAside = (props: PropsWithChildren) => {
	const [toggled, setToggled] = useState(true);

	const asideRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (!asideRef.current) return;
		const anchors = asideRef.current.querySelectorAll('a');
		if (!anchors) return;
		if (toggled) {
			anchors.forEach((anchor) => (anchor.tabIndex = -1));
		} else {
			anchors.forEach((anchor) => (anchor.tabIndex = 0));
			const heading = asideRef.current.querySelector('h2');
			if (heading) heading.focus();
		}
	}, [toggled]);

	return (
		<aside
			ref={asideRef}
			className={`fixed bottom-0 lg:bottom-2 lg:right-2 flex flex-col gap-2 bg-black text-white w-full h-full lg:max-w-[33svw] max-h-[50svh] z-10 transition-transform ${toggled ? 'translate-x-full lg:translate-x-[calc(100%_+_0.75rem)]' : ''} rounded-t-3xl lg:rounded-3xl text-lg p-8 gap-8 flex flex-col z-50`}
			onBlur={() => setToggled(false)}>
			<button
				onClick={() => setToggled(!toggled)}
				className={`flex gap-2 ${toggled ? 'before:content-["<<"]' : 'after:content-[">>"]'} absolute translate-y-[-110%] lg:translate-y-0 ${!toggled ? 'translate-x-2 lg:translate-x-[-130%]' : 'translate-y-0 translate-x-[-130%]'} bg-rose-500 p-4 transition-transform rounded-lg`}>
				{!toggled ? 'Close' : 'Open'} info
			</button>
			{props.children}
		</aside>
	);
};

const DualView = (props: {
	clone: React.ReactNode;
	info: React.ReactNode;
	infonav: React.ReactNode;
	infotitle: React.ReactNode;
}) => {
	const { clone, info, infonav, infotitle } = props;
	return (
		<>
			{clone || CloneMissing()}
			<ToggleAside>
				<section className='overflow-hidden flex flex-col gap-4'>
					{infotitle || InfoTitleMissing()}
					<div className='flex flex-col gap-4 overflow-y-auto pr-4 font-light'>
						{info || InfoMissing()}
					</div>
				</section>
				<nav className='flex gap-2 font-light'>
					<h2>Links:</h2>
					<ul className='flex gap-2 underline'>
						{infonav || InfoNavMissing()}
					</ul>
				</nav>
			</ToggleAside>
		</>
	);
};

export default DualView;
