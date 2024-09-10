'use client';

import { SafeExternalLink } from '@/components/global/Commons';
import { ToggleContext } from '../Interface';
import { useContext } from 'react';

export const PanelContentLink = ({
	children,
	href,
}: {
	href: string;
	children: React.ReactNode;
}) => {
	const { toggled } = useContext(ToggleContext);

	return (
		<SafeExternalLink
			href={href}
			aria-hidden={!toggled}
			tabIndex={toggled ? 0 : -1}>
			{children}
		</SafeExternalLink>
	);
};
