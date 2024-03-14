'use client';

import { useState, PropsWithChildren, useEffect, useRef } from 'react';

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
		<>
			<button
				id='toggleAside'
				onClick={() => setToggled(!toggled)}
				className={`flex gap-2 ${toggled ? 'before:content-["<<"]' : 'after:content-[">>"]'} fixed bottom-2 right-2 bg-rose-500 p-4 rounded-lg z-[60] text-white shadow-md`}>
				{!toggled ? 'Close' : 'Open'} info
			</button>
			<aside
				ref={asideRef}
				className={`fixed bottom-0 right-0 lg:bottom-2 lg:right-2 flex flex-col gap-2 bg-black text-white h-full w-full max-w-prose lg:max-w-[33svw] max-h-[50svh] lg:max-h-[75svh] z-10 transition-all ${toggled ? 'translate-x-full lg:translate-x-[calc(100%+2rem)] shadow-none' : 'translate-x-0 shadow-2xl'} rounded-t-3xl lg:rounded-3xl text-lg p-8 gap-8 flex flex-col z-50`}>
				<div className='flex flex-col gap-4 overflow-hidden h-full w-full max-w-prose'>
					{props.children}
				</div>
			</aside>
		</>
	);
};

const TogglePanel = (props: PropsWithChildren) => {
	return <ToggleAside>{props.children}</ToggleAside>;
};

export default TogglePanel;
