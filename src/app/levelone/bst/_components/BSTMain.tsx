'use client';

import { BSTBgColors } from './Content';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren, useContext } from 'react';
import BTSScrollContext from './BSTScroll';

const BSTMain = ({ children }: PropsWithChildren) => {
	const { screen } = useContext(BTSScrollContext);

	return (
		<main
			className={twMerge([
				BSTBgColors[screen] ?? 'bg-white',
				'sm:h-lvh transition-all',
			])}>
			{children}
		</main>
	);
};

export default BSTMain;
