'use client';

import { useState } from 'react';
import Link from 'next/link';

export const OriginalNav = (props: { original: string }) => {
	return <Link href={props.original}>Original</Link>;
};

export const LayoutNav = (props: { upOne: string }) => {
	return (
		<>
			<Link href={props.upOne}>Back</Link>
			<Link href='/'>Home</Link>
		</>
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
