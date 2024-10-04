'use client';

import { SCREEN_LG } from '@/consts/tailwind';
import {
	createToggleMenuContext,
	ToggleMenuContextProvider,
} from '@/hooks/ForMenus';
import { PropsWithChildren, useContext } from 'react';
import { IoCaretForward, IoClose, IoPersonOutline } from 'react-icons/io5';
import { GoDHeaderStyler } from '../styling';
import { twMerge } from 'tailwind-merge';
import { SafeExternalLink } from '@/components/global/Commons';

const GoDLoginContext = createToggleMenuContext();

export const GoDLoginContextProvider = ({ children }: PropsWithChildren) => (
	<ToggleMenuContextProvider
		breakpoint={SCREEN_LG}
		ContextToProvide={GoDLoginContext}
		checkBreakpointOnMount>
		{children}
	</ToggleMenuContextProvider>
);

const sharedAriaID = 'header-login';

export const GoDLoginToggleButton = () => {
	const { toggled, setToggled } = useContext(GoDLoginContext);
	return (
		<button
			onClick={() => setToggled((prev) => !prev)}
			className={GoDHeaderStyler([
				'group outline-emerald-400 hover:lg:text-neutral-950',
				toggled
					? 'bg-neutral-50 text-neutral-950'
					: 'text-neutral-50 bg-transparent',
			])}
			aria-expanded={toggled}
			aria-controls={sharedAriaID}>
			<IoPersonOutline
				aria-hidden
				className='text-2xl lg:hidden'
			/>
			<span className='sr-only lg:not-sr-only'>Sign in</span>
			<IoCaretForward
				aria-hidden
				className={twMerge([
					'hidden lg:block',
					'group-hover:rotate-0',
					toggled ? '-rotate-90' : 'rotate-90',
				])}
			/>
		</button>
	);
};

export const GoDLoginContainer = ({ children }: PropsWithChildren) => {
	const { toggled, setToggled } = useContext(GoDLoginContext);
	return (
		<div
			id={sharedAriaID}
			aria-expanded={toggled}
			className={twMerge([
				toggled ? 'flex' : 'hidden',
				'fixed lg:absolute w-full lg:w-auto top-0 lg:top-14 left-0 lg:left-auto lg:right-0 lg:drop-shadow-2xl items-start lg:items-center h-screen lg:h-auto z-10 backdrop-brightness-50 backdrop-blur-lg lg:backdrop-blur-none lg:backdrop-brightness-100 lg:text-neutral-950 lg:bg-neutral-50 p-8',
			])}>
			<button
				onClick={() => setToggled(false)}
				className='absolute top-2 right-2 z-10 lg:hidden text-xl p-2 rounded-full transition-all text-neutral-50 bg-transparent hover:text-neutral-950 hover:bg-neutral-50 focus-visible:text-neutral-950 focus-visible:bg-neutral-50'>
				<IoClose aria-hidden />
				<span className='sr-only'>Close login menu</span>
			</button>
			<nav className='flex flex-col divide-y'>{children}</nav>
		</div>
	);
};

export const GoDLoginLink = ({
	children,
	href,
}: PropsWithChildren & { href: string }) => {
	const { toggled } = useContext(GoDLoginContext);
	return (
		<SafeExternalLink
			href={href}
			tabIndex={toggled ? 0 : -1}
			className='underline underline-offset-4 lg:text-emerald-600 focus-visible:outline outline-emerald-400 outline-offset-4 w-max'>
			{children}
		</SafeExternalLink>
	);
};
