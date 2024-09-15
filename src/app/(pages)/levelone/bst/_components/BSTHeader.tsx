import { oswald } from '@/styles/fonts';
import { PropsWithChildren } from 'react';

const LocalLink = ({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) => (
	<a
		href={href}
		className='focus-visible:outline outline-black outline-offset-2 hover:underline'>
		{children}
	</a>
);

const BSTHeader = () => (
	<header className='absolute h-0 top-0 z-10 w-full'>
		<h1
			className={
				'absolute block top-4 left-4 font-bold text-2xl md:text-4xl ' +
				oswald.className
			}>
			BACKSTAGE TALKS
		</h1>
		<nav className='hidden lg:block fixed right-4 top-4 origin-top-right text-xl'>
			<ul>
				<li>
					<LocalLink href='#issue8'>Issue #8</LocalLink>
				</li>
				<li>
					<LocalLink href='#issue7'>Issue #7</LocalLink>
				</li>
				<li>
					<LocalLink href='#issue6'>Issue #6</LocalLink>
				</li>
				<li>
					<LocalLink href='#issue5'>Issue #5</LocalLink>
				</li>
				<li>
					<LocalLink href='#issue4'>Issue #4</LocalLink>
				</li>
				<li>
					<LocalLink href='#issue3'>Issue #3</LocalLink>
				</li>
				<li>
					<LocalLink href='#issue2'>Issue #2</LocalLink>
				</li>
				<li>
					<LocalLink href='#issue1'>Issue #1</LocalLink>
				</li>
			</ul>
		</nav>
	</header>
);

export default BSTHeader;
