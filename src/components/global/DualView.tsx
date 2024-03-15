'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, PropsWithChildren, useEffect, useRef } from 'react';
import { FaHome, FaInfoCircle, FaList, FaTimes } from 'react-icons/fa';

import interactiveLook from '@/styles/globals.module.scss';

const toggleClass =
	'flex gap-2 bg-rose-500 hover:text-black hover:bg-white hover:text-black hover:bg-white border-2 p-4 rounded-lg z-[60] shadow-md transition-all';

const ToggleAside = (props: PropsWithChildren) => {
	const [toggled, setToggled] = useState(true);
	const divRef = useRef<HTMLDivElement>(null);
	const pathSegments = usePathname()
		.split('/')
		.filter((segment) => segment !== '');

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
								<span className={interactiveLook.hiddenAccessibleText}>
									{!toggled ? 'Close' : 'Open'} info panel
								</span>
							</button>
						</li>
						<li>
							<Link
								href={`/${pathSegments[0]}`}
								className={toggleClass}>
								<FaList />
								<span className={interactiveLook.hiddenAccessibleText}>
									Back to index
								</span>
							</Link>
						</li>
						<li>
							<Link
								href='/'
								className={toggleClass}>
								<FaHome />
								<span className={interactiveLook.hiddenAccessibleText}>
									Back to home
								</span>
							</Link>
						</li>
					</ul>
				</nav>
				<div
					className='flex flex-col gap-4 overflow-hidden h-full w-full'
					ref={divRef}>
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
