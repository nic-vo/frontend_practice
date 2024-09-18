'use client';

import { SCREEN_MD } from '@/consts/tailwind';
import {
	createToggleMenuContext,
	ToggleMenuContextProvider,
	useMenuToggle,
} from '@/hooks/ForMenus';
import { IoClose, IoMenu } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

import type { PropsWithChildren } from 'react';
import { SafeExternalLink } from '@/components/global/Commons';
import LobeDLButton from '../LobeDLButton';

const LobeHeaderContext = createToggleMenuContext();

export const LobeHeaderParent = ({ children }: PropsWithChildren) => {
	const { toggled } = useMenuToggle(LobeHeaderContext);
	return (
		<header
			className={twMerge([
				'top-0 justify-between p-4 px-8 md:px-4 fixed w-full transition-all backdrop-blur-md bg-white bg-opacity-80 grid grid-cols-2 md:flex z-50',
				toggled ? 'drop-shadow-2xl' : '',
			])}>
			{children}
		</header>
	);
};

export const LobeToggleNavButton = () => {
	const { toggled, setToggled } = useMenuToggle(LobeHeaderContext);
	return (
		<button
			onClick={() => setToggled((prev) => !prev)}
			className='rounded-full flex items-center justify-center justify-self-end md:hidden size-8 bg-slate-200 focus-visible:outline outline-black text-xl'
			aria-controls='header-nav'
			aria-expanded={toggled}>
			{toggled ? <IoClose aria-hidden /> : <IoMenu aria-hidden />}
			<span className='sr-only'>Toggle menu</span>
		</button>
	);
};

export const LobeToggleNav = ({ children }: PropsWithChildren) => {
	const { toggled } = useMenuToggle(LobeHeaderContext);
	return (
		<nav
			id='header-nav'
			tabIndex={toggled ? 0 : -1}
			className={twMerge([
				toggled ? 'h-80' : 'h-0',
				'col-span-full md:opacity-100 md:p-0 md:h-auto md:left-auto md:flex md:py-0 md:flex-row after:md:hidden md:grow transition-all overflow-hidden w-full focus-visible:outline outline-black rounded md:overflow-visible',
			])}>
			{children}
		</nav>
	);
};

export const LobeHeaderLink = ({
	href,
	children,
}: {
	children: React.ReactNode;
	href: string;
}) => {
	const { toggled } = useMenuToggle(LobeHeaderContext);
	return (
		<SafeExternalLink
			href={href}
			className='text-center md:text-left md:hover:scale-110 hover:text-black text-stone-600 transition-all focus-visible:outline outline-black outline-offset-2 rounded-full block md:w-min md:p-2'
			tabIndex={toggled ? 0 : -1}>
			{children}
		</SafeExternalLink>
	);
};

export const HeaderDLButton = () => {
	const { toggled } = useMenuToggle(LobeHeaderContext);
	return (
		<LobeDLButton
			reachable={toggled}
			className='block text-white bg-teal-300 p-2 px-4 rounded-full hover:md:scale-110 transition-all focus-visible:outline outline-black text-center w-full md:w-max'
		/>
	);
};

export const LobeToggleMenuProvider = ({ children }: PropsWithChildren) => (
	<ToggleMenuContextProvider
		breakpoint={SCREEN_MD}
		ContextToProvide={LobeHeaderContext}>
		{children}
	</ToggleMenuContextProvider>
);
