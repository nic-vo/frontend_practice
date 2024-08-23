'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, PropsWithChildren, useEffect, useRef } from 'react';
import { FaHome, FaInfoCircle, FaList, FaTimes } from 'react-icons/fa';

const toggleClass =
	'flex gap-2 bg-rose-500 hover:text-black hover:bg-white hover:text-black hover:bg-white border-2 p-4 rounded-lg z-[60] shadow-md transition-all';

const ToggleAside = (props: PropsWithChildren) => {
	const [toggled, setToggled] = useState(true);
	const divRef = useRef<HTMLDivElement>(null);
	const pathSegments = usePathname()
		.split('/')
		.filter((segment) => segment !== '');

	useEffect(() => {
		if (!divRef.current) return;
		const anchors = divRef.current.querySelectorAll('a');
		if (!anchors) return;
		if (toggled) {
			anchors.forEach((anchor) => (anchor.tabIndex = -1));
			const heading = divRef.current.querySelector('h2');
			if (heading) heading.tabIndex = -1;
			const toggler = document.getElementById(
				'toggleInfoPanel',
			) as HTMLButtonElement;
			if (toggler) toggler.focus();
		} else {
			anchors.forEach((anchor) => (anchor.tabIndex = 0));
			const heading = divRef.current.querySelector('h2');
			if (heading) heading.tabIndex = 0;
		}
	}, [toggled]);

	if (pathSegments.length < 2) return null;
	return (
		<aside
			className={`fixed bottom-0 right-0 lg:bottom-2 lg:right-2 flex flex-col gap-2 bg-black text-white h-full w-full max-w-prose lg:max-w-[33svw] max-h-[50svh] lg:max-h-[75svh] z-10 transition-all ${toggled ? 'translate-x-full lg:translate-x-[calc(100%+2rem)] shadow-none' : 'translate-x-0 shadow-2xl'} rounded-t-3xl lg:rounded-3xl text-base lg:text-lg p-8 gap-8 flex flex-col z-50`}>
			<nav className='fixed -translate-x-full lg:-translate-x-[calc(100%+2rem)] bottom-2 -left-2'>
				<ul className='flex flex-col-reverse gap-4 text-2xl'>
					<li>
						<button
							onClick={() => setToggled(!toggled)}
							id='toggleInfoPanel'
							className={toggleClass}>
							<FaInfoCircle />
							<span className='sr-only'>
								{!toggled ? 'Close' : 'Open'} info panel
							</span>
						</button>
					</li>
					<li>
						<Link
							href={`/${pathSegments[0]}`}
							className={toggleClass}>
							<FaList />
							<span className='sr-only'>Back to index</span>
						</Link>
					</li>
					<li>
						<Link
							href='/'
							className={toggleClass}>
							<FaHome />
							<span className='sr-only'>Back to home</span>
						</Link>
					</li>
				</ul>
			</nav>
			<div
				className='flex flex-col gap-4 overflow-hidden h-full w-full'
				ref={divRef}>
				{props.children}
			</div>
			<button
				onClick={() => setToggled(true)}
				className='absolute top-4 right-4 p-2 border-2 rounded-full hover:text-black hover:bg-white focus:text-black focus:bg-white transition-all'
				tabIndex={toggled ? -1 : 0}>
				<FaTimes />
			</button>
		</aside>
	);
};

const TogglePanel = (props: PropsWithChildren) => {
	return <ToggleAside>{props.children}</ToggleAside>;
};

export default TogglePanel;
