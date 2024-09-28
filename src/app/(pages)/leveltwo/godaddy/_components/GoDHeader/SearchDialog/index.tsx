import { SafeExternalLink } from '@/components/global/Commons';
import { PropsWithChildren } from 'react';

const SearchQuickLink = ({
	children,
	href,
}: PropsWithChildren & { href: string }) => (
	<SafeExternalLink
		href={href}
		className='*:text-3xl flex gap-2'>
		{children}
	</SafeExternalLink>
);

const SearchPopLink = ({
	children,
	href,
}: PropsWithChildren & { href: string }) => (
	<SafeExternalLink href={href}>{children}</SafeExternalLink>
);
