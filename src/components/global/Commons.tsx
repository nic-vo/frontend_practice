import { AnchorHTMLAttributes } from 'react';

export const SafeExternalLink = ({
	children,
	...attrs
}: {
	children: React.ReactNode;
} & Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'target' | 'rel' | 'referrerPolicy'
>) => {
	return (
		<a
			{...attrs}
			target='_blank'
			rel='noreferrer'
			referrerPolicy='no-referrer'>
			{children}
		</a>
	);
};
