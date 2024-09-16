import { SafeExternalLink } from '@/components/global/Commons';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const HeaderLinkClasses =
	'block p-2 px-4 rounded-full bg-transparent text-center';

const HeaderLink = ({
	children,
	href,
}: PropsWithChildren & { href: string }) => (
	<SafeExternalLink
		href={href}
		className={HeaderLinkClasses}>
		{children}
	</SafeExternalLink>
);

const OHHeader = () => (
	<header className='fixed top-8 left-1/2 -translate-x-1/2 rounded-full backdrop-blur-lg bg-white bg-opacity-40 backdrop-brightness-90 z-10'>
		<nav className='p-1'>
			<ul className='flex gap-2 *:block'>
				<li>
					<Link
						href='/levelone/ohstudio'
						className={twMerge([HeaderLinkClasses, 'bg-white'])}>
						Home
					</Link>
				</li>
				<li>
					<HeaderLink href='https://oh.studio/profile'>Profile</HeaderLink>
				</li>
				<li>
					<HeaderLink href='https://oh.studio/contact'>Contact</HeaderLink>
				</li>
			</ul>
		</nav>
	</header>
);

export default OHHeader;
