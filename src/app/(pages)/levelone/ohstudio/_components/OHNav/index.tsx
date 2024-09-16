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
import { IoHeartOutline } from 'react-icons/io5';

const commonUrl = 'https://oh.studio/projects/';

const CommonLink = ({
	children,
	projectName,
}: PropsWithChildren & { projectName: string }) => (
	<SafeExternalLink
		href={projectName !== '' ? commonUrl + projectName : ''}
		className='block'>
		{children}
	</SafeExternalLink>
);

const CommonImage = ({ data }: { data: StaticImageData }) => (
	<Image
		src={data}
		alt=''
		className='aspect-[4/3] overflow-hidden rounded-2xl'
		style={{ objectFit: 'cover' }}
	/>
);

const LinkArr = [
	<CommonLink
		key='aire'
		projectName='aire'>
		<CommonImage data={Perfume} />
		<p>Aire</p>
	</CommonLink>,
	<CommonLink
		key='correlated'
		projectName='correlated'>
		<CommonImage data={iPad} />
		<p>Correlated</p>
	</CommonLink>,
	<CommonLink
		key='my5'
		projectName='my5'>
		<CommonImage data={iPad} />
		<p>Channel 5</p>
	</CommonLink>,
	<CommonLink
		key='ronald-abram'
		projectName='ronald-abram'>
		<CommonImage data={Jewelry} />
		<p>Ronald Abram</p>
	</CommonLink>,
	<CommonLink
		key='propeller'
		projectName='propeller'>
		<CommonImage data={BusStop} />
		<p>Propeller</p>
	</CommonLink>,
	<CommonLink
		key='schuh'
		projectName='schuh'>
		<CommonImage data={iPhone} />
		<p>Schuh</p>
	</CommonLink>,
	<CommonLink
		key='paperstreet'
		projectName='paperstreet'>
		<CommonImage data={MacBook} />
		<p>Paperstreet</p>
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
		<p>OH.SUPPLY</p>
	</CommonLink>,
	<CommonLink
		key='monokel-eyewear'
		projectName='monokel-eyewear'>
		<CommonImage data={iPad} />
		<p>Monokel Eyewear</p>
	</CommonLink>,
	<CommonLink
		key='lawtrades'
		projectName=''>
		<CommonImage data={iPhone} />
		<p>Lawtrades</p>
	</CommonLink>,
	<CommonLink
		key='baselworld'
		projectName=''>
		<CommonImage data={iPhone} />
		<p>Baselworld</p>
	</CommonLink>,
	<CommonLink
		key=''
		projectName='nycb'>
		<CommonImage data={Dancers} />
		<p>NYCB</p>
	</CommonLink>,
];

const OHNav = () => (
	<nav className='w-11/12 max-w-screen-xl'>
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
