import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

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

export const InlineCode = ({
	children,
	className,
}: PropsWithChildren & { className?: string }) => (
	<span className={twMerge(['font-mono', className])}>{children}</span>
);
