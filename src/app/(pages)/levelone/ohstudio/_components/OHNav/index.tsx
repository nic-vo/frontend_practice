import {
	BusStop,
	Dancers,
	Jewelry,
	MacBook,
	Perfume,
	iPad,
	iPhone,
} from './images';
import { SafeExternalLink } from '@/components/global/Commons';
import Image from 'next/image';

import type { StaticImageData } from 'next/image';
import type { PropsWithChildren } from 'react';
import { IoArrowUp, IoHeartOutline, IoLockClosed } from 'react-icons/io5';

const commonUrl = 'https://oh.studio/projects/';

const CommonLink = ({
	children,
	projectName,
}: PropsWithChildren & { projectName: string }) => (
	<SafeExternalLink
		href={projectName !== '' ? commonUrl + projectName : ''}
		className='block group/link before:hidden sm:before:block before:content[""] before:absolute before:h-full before:w-full sm:rounded-2xl sm:overflow-hidden before:transition-all hover:before:backdrop-blur hover:before:backdrop-brightness-75 focus-visible:before:backdrop-blur focus-visible:before:backdrop-brightness-75 before:z-10 focus-visible:outline-2 outline-black outline-offset-2'>
		{children}
	</SafeExternalLink>
);

const CommonImage = ({ data }: { data: StaticImageData }) => (
	<Image
		src={data}
		alt=''
		className='aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-none z-0'
		style={{ objectFit: 'cover' }}
	/>
);

const LinkText = ({ children }: PropsWithChildren) => (
	<p className='sm:absolute sm:top-4 sm:left-4 sm:opacity-0 sm:group-hover/link:opacity-100 sm:group-focus-visible/link:opacity-100 transition-opacity sm:text-white z-20'>
		{children}
	</p>
);

const LinkArrow = () => (
	<div
		className='hidden sm:block absolute top-4 right-4 rotate-45 text-xl text-black rounded-full z-20 p-2 bg-neutral-200 opacity-0 -translate-x-full translate-y-full sm:group-hover/link:opacity-100 sm:group-hover/link:translate-x-0 sm:group-hover/link:translate-y-0 sm:group-focus-visible/link:opacity-100 sm:group-focus-visible/link:translate-x-0 sm:group-focus-visible/link:translate-y-0 transition-all'
		role='image'
		aria-label='Arrow icon'>
		<IoArrowUp aria-hidden />
	</div>
);

const LinkLock = () => (
	<div
		className='block absolute top-4 right-4 text-xl text-black rounded-full z-20 p-2 bg-neutral-200 sm:opacity-0 sm:-translate-x-full sm:translate-y-full sm:group-hover/link:opacity-100 sm:group-hover/link:translate-x-0 sm:group-hover/link:translate-y-0 sm:group-focus-visible/link:opacity-100 sm:group-focus-visible/link:translate-x-0 sm:group-focus-visible/link:translate-y-0 transition-all'
		role='image'
		aria-label='Arrow icon'>
		<IoLockClosed aria-hidden />
	</div>
);

const LinkArr = [
	<CommonLink
		key='aire'
		projectName='aire'>
		<CommonImage data={Perfume} />
		<LinkText>Aire</LinkText>
		<LinkArrow />
	</CommonLink>,
	<CommonLink
		key='correlated'
		projectName='correlated'>
		<CommonImage data={iPad} />
		<LinkText>Correlated</LinkText>
		<LinkArrow />
	</CommonLink>,
	<CommonLink
		key='my5'
		projectName='my5'>
		<CommonImage data={iPad} />
		<LinkText>Channel 5</LinkText>
		<LinkArrow />
	</CommonLink>,
	<CommonLink
		key='ronald-abram'
		projectName='ronald-abram'>
		<CommonImage data={Jewelry} />
		<LinkText>Ronald Abram</LinkText>
		<LinkArrow />
	</CommonLink>,
	<CommonLink
		key='propeller'
		projectName='propeller'>
		<CommonImage data={BusStop} />
		<LinkText>Propeller</LinkText>
		<LinkArrow />
	</CommonLink>,
	<CommonLink
		key='schuh'
		projectName='schuh'>
		<CommonImage data={iPhone} />
		<LinkText>Schuh</LinkText>
		<LinkArrow />
	</CommonLink>,
	<CommonLink
		key='paperstreet'
		projectName='paperstreet'>
		<CommonImage data={MacBook} />
		<LinkText>Paperstreet</LinkText>
		<LinkArrow />
	</CommonLink>,
	<CommonLink
		key='oh-supply'
		projectName='oh-supply'>
		<div
			className='bg-black text-white aspect-[4/3] flex flex-col items-center justify-center rounded-2xl'
			role='image'
			aria-label=''>
			<IoHeartOutline
				className='text-9xl'
				aria-hidden
			/>
		</div>
		<LinkText>OH.SUPPLY</LinkText>
		<LinkArrow />
	</CommonLink>,
	<CommonLink
		key='monokel-eyewear'
		projectName='monokel-eyewear'>
		<CommonImage data={iPad} />
		<LinkText>Monokel Eyewear</LinkText>
		<LinkArrow />
	</CommonLink>,
	<CommonLink
		key='lawtrades'
		projectName=''>
		<CommonImage data={iPhone} />
		<LinkText>
			Lawtrades <span className='text-neutral-400'>Coming soon</span>
		</LinkText>
		<LinkLock />
	</CommonLink>,
	<CommonLink
		key='baselworld'
		projectName=''>
		<CommonImage data={iPhone} />
		<LinkText>
			Baselworld <span className='text-neutral-400'>Coming soon</span>
		</LinkText>
		<LinkLock />
	</CommonLink>,
	<CommonLink
		key='nycb'
		projectName='nycb'>
		<CommonImage data={Dancers} />
		<LinkText>NYCB</LinkText>
		<LinkArrow />
	</CommonLink>,
];

const OHNav = () => (
	<nav className='w-11/12 max-w-screen-xl z-0 mt-32'>
		<ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
			{LinkArr.map((Thing, index) => (
				<li
					key={`ohnav-${index}`}
					className='block'>
					{Thing}
				</li>
			))}
		</ul>
	</nav>
);

export default OHNav;
