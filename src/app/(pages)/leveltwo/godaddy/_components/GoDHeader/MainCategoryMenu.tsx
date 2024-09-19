'use client';

import { SCREEN_LG } from '@/consts/tailwind';
import {
	createToggleMenuContext,
	ToggleMenuContextProvider,
} from '@/hooks/ForMenus';
import { PropsWithChildren, useContext } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

export const GoDMainCategoryContext = createToggleMenuContext();

const GoDMainCategoryAriaName = 'main-category-list';

export const OpenGoDMainCategoryButton = () => {
	const { toggled, setToggled } = useContext(GoDMainCategoryContext);
	return (
		<button
			onClick={() => setToggled((prev) => !prev)}
			className='lg:hidden'
			aria-controls={GoDMainCategoryAriaName}
			aria-expanded={toggled}>
			{toggled ? <IoClose aria-hidden /> : <IoMenu aria-hidden />}
			<span className='sr-only'>Toggle main navigation menu</span>
		</button>
	);
};

export const CloseGoDMainCategoryButton = () => {
	const { toggled, setToggled } = useContext(GoDMainCategoryContext);
	return (
		<button
			onClick={() => setToggled(false)}
			className='z-10'>
			<IoClose aria-hidden />
			<span className='sr-only'>Close main navigation menu</span>
		</button>
	);
};

export const GoDMainCategoryContainer = ({ children }: PropsWithChildren) => {
	const { toggled } = useContext(GoDMainCategoryContext);
	return (
		<div
			className={twMerge([
				toggled ? 'flex' : 'hidden lg:flex',
				'fixed top-0 left-0 lg:top-auto lg:left-auto items-start lg:items-center lg:relative h-screen lg:h-auto after:z-0 after:content-[""] after:h-screen after:w-screen after:fixed lg:after:hidden after:backdrop-brightness-50 after:top-0 after:left-0',
			])}
			aria-expanded={toggled}
			id={GoDMainCategoryAriaName}>
			{children}
		</div>
	);
};

export const GoDMainCategoryContextProvider = ({
	children,
}: PropsWithChildren) => (
	<ToggleMenuContextProvider
		ContextToProvide={GoDMainCategoryContext}
		breakpoint={SCREEN_LG}>
		{children}
	</ToggleMenuContextProvider>
);
