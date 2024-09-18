'use client';

import { SCREEN_LG } from '@/consts/tailwind';
import {
	createToggleMenuContext,
	ToggleMenuContextProvider,
} from '@/hooks/ForMenus';
import { PropsWithChildren, useContext } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

const MainCategoryContext = createToggleMenuContext();

const MainCategoryAriaName = 'main-category-list';

export const MainCategoryButton = () => {
	const { toggled, setToggled } = useContext(MainCategoryContext);
	return (
		<button
			onClick={() => setToggled((prev) => !prev)}
			className='lg:hidden'
			aria-controls={MainCategoryAriaName}
			aria-expanded={toggled}>
			{toggled ? <IoClose aria-hidden /> : <IoMenu aria-hidden />}
			<span className='sr-only'>Toggle main navigation menu</span>
		</button>
	);
};

export const MainCategoryUL = ({ children }: PropsWithChildren) => {
	const { toggled } = useContext(MainCategoryContext);
	return (
		<ul
			className={twMerge([toggled ? 'flex' : 'hidden'])}
			id={MainCategoryAriaName}>
			{children}
		</ul>
	);
};

export const MainCategoryContextProvider = ({
	children,
}: PropsWithChildren) => (
	<ToggleMenuContextProvider
		ContextToProvide={MainCategoryContext}
		breakpoint={SCREEN_LG}>
		{children}
	</ToggleMenuContextProvider>
);
