import { SafeExternalLink } from '@/components/global/Commons';
import issue1 from './images/backstagetalks_cover_issue_1.png';
import issue2 from './images/backstagetalks_cover_issue_2.png';
import issue3 from './images/backstagetalks_cover_issue_3.png';
import issue4 from './images/backstagetalks_cover_issue_4.png';
import issue5 from './images/backstagetalks_cover_issue_5.png';
import issue6 from './images/backstagetalks_cover_issue_6.png';
import issue7 from './images/backstagetalks_cover_issue_7.png';
import issue8 from './images/backstagetalks_cover_issue_8.png';

import Image, { StaticImageData } from 'next/image';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const ReorderedImage = ({
	img,
	alt,
}: {
	img: StaticImageData;
	alt: string;
}) => (
	<Image
		src={img}
		alt={alt}
		className='h-1/2 w-auto'
	/>
);

const IssueSection = ({
	children,
	...attrs
}: PropsWithChildren & Omit<HTMLAttributes<HTMLElement>, 'className'>) => (
	<section
		{...attrs}
		className='flex flex-col items-center gap-4 h-full'>
		{children}
	</section>
);

const IssueSellLink = ({
	className,
	href,
	children,
}: {
	className?: string;
	href: string;
	children: React.ReactNode;
}) => (
	<SafeExternalLink
		href={href}
		className={twMerge(['text-white', className])}>
		{children}
	</SafeExternalLink>
);

const SelectedStores = ({
	children,
	className,
}: {
	className?: string;
	children?: string;
}) => (
	<IssueSellLink
		href='https://backstagetalks.com/stocklist.php'
		className={className}>
		{children ?? 'selected stores'}
	</IssueSellLink>
);

const SelectedStoresBlurb = () => (
	<p>
		If you are lucky, you may get the last pieces in <SelectedStores />.
	</p>
);

export const BSTBgColors = [
	'bg-amber-100',
	'bg-rose-400',
	'bg-white',
	'bg-teal-400',
	'bg-orange-600',
	'bg-yellow-400',
	'bg-blue-700',
	'bg-red-600',
];

export const BSTContentElements = [
	() => (
		<IssueSection id='issue8'>
			<ReorderedImage
				img={issue8}
				alt='Issue #8 cover'
			/>
			<h2>Issue #8</h2>
			<p>
				<SafeExternalLink href='https://brot.sk/products/pre-order-backstage-talks-issue-8'>
					Buy here
				</SafeExternalLink>{' '}
				or in <SelectedStores className='text-fuchsia-600' />.
			</p>
		</IssueSection>
	),
	() => (
		<IssueSection id='issue7'>
			<ReorderedImage
				img={issue7}
				alt='Issue #7 cover'
			/>
			<h2>Issue #7</h2>
			<IssueSellLink
				href='https://brot.sk/products/backstage-talks-issue-7'
				className='text-white'>
				Buy here for Europe
			</IssueSellLink>
			<SafeExternalLink
				href='https://www.newsstand.co.uk/196-business-and-finance-magazines/33211-subscribe-to-backstage-talks-magazine-subscription.aspx'
				className='text-white'>
				Buy here for Europe
			</SafeExternalLink>
		</IssueSection>
	),
	() => (
		<IssueSection id='issue6'>
			<ReorderedImage
				img={issue6}
				alt='Issue #6 cover'
			/>
			<h2>Issue #6</h2>
			<p>
				<SafeExternalLink
					href='https://brot.sk/products/backstage-talks-issue-6?_pos=2&_sid=1c5730cc8&_ss=r'
					className='text-fuchsia-600'>
					Buy here
				</SafeExternalLink>{' '}
				or in <SelectedStores className='text-fuchsia-600' />.
			</p>
		</IssueSection>
	),
	() => (
		<IssueSection id='issue5'>
			<ReorderedImage
				img={issue5}
				alt='Issue #5 cover'
			/>
			<h2>Issue #5</h2>
			<p>
				<SafeExternalLink href='https://brot.sk/products/backstage-talks-5?_pos=3&_sid=1c5730cc8&_ss=r'>
					Buy here
				</SafeExternalLink>{' '}
				or in <SelectedStores />.
			</p>
		</IssueSection>
	),
	() => (
		<IssueSection id='issue4'>
			<ReorderedImage
				img={issue4}
				alt='Issue #4 cover'
			/>
			<h2>Issue #4 is sold out.</h2>
			<SelectedStoresBlurb />
		</IssueSection>
	),
	() => (
		<IssueSection id='issue3'>
			<ReorderedImage
				img={issue3}
				alt='Issue #3 cover'
			/>
			<h2>Issue #3 is sold out.</h2>
			<SelectedStoresBlurb />
		</IssueSection>
	),
	() => (
		<IssueSection id='issue2'>
			<ReorderedImage
				img={issue2}
				alt='Issue #2 cover'
			/>
			<h2>Issue #2</h2>
			<p>
				<SafeExternalLink href='https://brot.sk/products/backstage-talks-2?_pos=1&_sid=1c5730cc8&_ss=r'>
					Buy here
				</SafeExternalLink>{' '}
				or in <SelectedStores />.
			</p>
		</IssueSection>
	),
	() => (
		<IssueSection id='issue1'>
			<ReorderedImage
				img={issue1}
				alt='Issue #1 cover'
			/>
			<h2>Issue #1 is sold out.</h2>
			<SelectedStoresBlurb />
		</IssueSection>
	),
];
