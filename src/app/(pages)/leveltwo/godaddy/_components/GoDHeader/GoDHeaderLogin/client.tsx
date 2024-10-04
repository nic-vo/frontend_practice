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
				className='lg:hidden'
			/>
			<span className='sr-only lg:not-sr-only'>Sign in</span>
			<IoCaretForward
				aria-hidden
				className={
					'group-hover:rotate-0 ' + toggled ? '-rotate-90' : 'rotate-90'
				}
			/>
		</button>
	);
};

export const GoDLoginContainer = ({ children }: PropsWithChildren) => {
	const { toggled, setToggled } = useContext(GoDLoginContext);
	return (
		<nav
			id={sharedAriaID}
			aria-expanded={toggled}
			className={twMerge([
				'top-0 lg:top-14 lg:fixed lg:left-0 lg:w-screen flex-col gap-4 lg:flex-row grow outline focus-visible:outline-emerald-400 outline-black rounded-lg lg:rounded-none lg:-outline-offset-2 pl-8 py-4 lg:bg-neutral-50 lg:text-neutral-950',
				toggled ? 'flex' : 'hidden',
			])}>
			<button
				onClick={() => setToggled(false)}
				className='absolute top-2 right-2 z-10'>
				<IoClose aria-hidden />
				<span className='sr-only'>Close login menu</span>
			</button>
			{children}
		</nav>
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
			tabIndex={toggled ? 0 : -1}>
			{children}
		</SafeExternalLink>
	);
};
