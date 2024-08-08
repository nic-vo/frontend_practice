import { SafeExternalLink } from '@/components/global/Commons';
import { PropsWithChildren } from 'react';

export const AbstractGridHeading = (props: PropsWithChildren) => {
	return <h3>{props.children}</h3>;
};

export const AbstractGridContent = (props: PropsWithChildren) => {
	return <p>{props.children}</p>;
};

export const AbstractGridLink = (
	props: PropsWithChildren & { href: string },
) => {
	return (
		<SafeExternalLink href={props.href}>{props.children}</SafeExternalLink>
	);
};

export const AbstractGridText = (props: PropsWithChildren) => {
	return <p>{props.children}</p>;
};
