'use client';

import { SafeExternalLink } from '@/components/global/Commons';
import { ToggleContext } from '../Interface';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

export const PanelContentLink = ({
	children,
	href,
	className,
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
}) => {
	const { toggled } = useContext(ToggleContext);

	return (
		<SafeExternalLink
			href={href}
			aria-hidden={!toggled}
			tabIndex={toggled ? 0 : -1}
			className={twMerge([
				'underline font-bold focus-visible:outline inline-block w-max outline-white outline-offset-2',
				className ?? '',
			])}>
			{children}
		</SafeExternalLink>
	);
};
