'use client';

import { useState, PropsWithChildren } from 'react';
import {
	CloneMissing,
	InfoMissing,
	InfoNavMissing,
	InfoTitleMissing,
} from './DualViewServer';

const ToggleAside = (props: PropsWithChildren) => {
	const [toggled, setToggled] = useState(true);
	return (
		<aside
			className={`fixed bottom-0 lg:bottom-2 lg:right-2 flex flex-col gap-2 bg-black text-white w-full h-full lg:max-w-[33svw] max-h-[50svh] z-10 transition-transform ${toggled ? 'translate-x-full lg:translate-x-[calc(100%_+_0.75rem)]' : ''} rounded-t-3xl lg:rounded-3xl`}>
			<button
				onClick={() => setToggled(!toggled)}
				className={`flex gap-2 ${toggled ? 'before:content-["<<"]' : 'after:content-[">>"]'} absolute translate-y-[-110%] lg:translate-y-0 ${!toggled ? 'translate-x-2 lg:translate-x-[-110%]' : 'translate-y-0 translate-x-[-110%]'} bg-rose-500 p-4 transition-transform rounded-lg`}>
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
				<div className='flex flex-col gap-4 p-8 h-full text-lg'>
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
				</div>
			</ToggleAside>
		</>
	);
};

export default DualView;
