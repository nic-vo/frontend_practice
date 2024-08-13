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
				aria-pressed={toggled}>
				{toggled ? <IoClose aria-hidden /> : <IoMenu aria-hidden />}
			</button>
			<menu
				className={twMerge(
					'absolute left-0 bottom-0 w-full translate-y-full bg-black z-10 lg:hidden flex-col divide-y lg:divide-y-0 items-center lg:flex-row p-4 border-t-stone-500 border-t',
					toggled ? 'flex' : 'hidden',
				)}>
				<li className='block'>
					<SafeExternalLink
						href='https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support'
						className='block p-4 px-32 hover:brightness-75 transition-all focus-visible:outline outline-white rounded-lg'
						tabIndex={toggled ? 0 : -1}>
						Submit a request
					</SafeExternalLink>
				</li>
				<li className='block'>
					<SafeExternalLink
						href='https://help.abstract.com/hc/en-us/signin?return_to=https%3A%2F%2Fhelp.abstract.com%2Fhc%2Fen-us&locale=en-us'
						className='block p-4 px-32 hover:brightness-75 transition-all focus-visible:outline outline-white rounded-lg'
						tabIndex={toggled ? 0 : -1}>
						Sign In
					</SafeExternalLink>
				</li>
			</menu>
		</>
	);
};

export default MiniMenu;
