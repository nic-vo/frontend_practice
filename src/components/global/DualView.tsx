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
}) => {
	const [toggled, setToggled] = useState(true);
	const { clone, info, infonav } = props;
	return (
		<>
			{clone}
			<aside
				className={`fixed bottom-0 lg:bottom-2 lg:right-2 flex flex-col gap-2 bg-black text-white rounded-lg w-full h-full lg:max-w-[33svw] max-h-[50svh] z-10 transition-transform ${!toggled ? 'translate-x-[calc(100%_+_0.75rem)]' : ''}`}>
				<div className='p-4 overflow-auto'>
					<nav className='flex gap-2 underline'>{infonav}</nav>
					{info}
				</div>
				<button
					onClick={() => setToggled(!toggled)}
					className='absolute translate-x-[-110%] bg-red-300 p-4'>
					Info
				</button>
			</aside>
		</>
	);
};

export default DualView;
