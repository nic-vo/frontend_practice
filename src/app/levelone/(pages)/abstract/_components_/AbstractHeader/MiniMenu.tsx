'use client';

import { SafeExternalLink } from '@/components/global/Commons';
import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

const MiniMenu = () => {
	const [toggled, setToggled] = useState(false);

	return (
		<>
			<button
				onClick={() => setToggled(!toggled)}
				aria-label='Open menu'
				aria-pressed={toggled}
				className='lg:hidden'>
				{toggled ? <IoClose aria-hidden /> : <IoMenu aria-hidden />}
			</button>
			<menu
				className={twMerge(
					'absolute bottom-0 left-0 w-full lg:w-max translate-y-full lg:translate-y-0 bg-black z-10 lg:flex lg:relative flex-col divide-y lg:divide-y-0 items-center lg:flex-row lg:gap-8 p-4 border-t-stone-500 border-t lg:border-t-0',
					toggled ? 'flex' : 'hidden',
				)}>
				<li className='block'>
					<SafeExternalLink
						href='https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support'
						className='block p-2 px-32 hover:brightness-75 transition-all focus-visible:outline outline-white rounded-lg lg:px-8 border border-black lg:border-white'
						tabIndex={toggled ? 0 : -1}>
						Submit a request
					</SafeExternalLink>
				</li>
				<li className='block'>
					<SafeExternalLink
						href='https://help.abstract.com/hc/en-us/signin?return_to=https%3A%2F%2Fhelp.abstract.com%2Fhc%2Fen-us&locale=en-us'
						className='block p-2 px-32 hover:brightness-75 transition-all focus-visible:outline outline-white rounded-lg lg:px-8 lg:bg-indigo-500 border border-black lg:border-indigo-500'
						tabIndex={toggled ? 0 : -1}>
						Sign In
					</SafeExternalLink>
				</li>
			</menu>
		</>
	);
};

export default MiniMenu;
