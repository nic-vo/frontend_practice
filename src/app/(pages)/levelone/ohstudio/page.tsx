import { SafeExternalLink } from '@/components/global/Commons';
import { IoAdd } from 'react-icons/io5';
import { OHHeader, OHNav } from './_components';
import { PropsWithChildren } from 'react';
import OHMain from './_components/OHMain';

const AnnoyingLi = ({ children }: PropsWithChildren) => (
	<span className='block rounded-full p-2 bg-neutral-100'>{children}</span>
);

const OHStudioHome = () => (
	<OHMain>
		<OHHeader />
		<h1 className='text-4xl sm:text-6xl lg:text-7xl font-medium text-center w-full sm:w-3/4 lg:w-1/2'>
			A brand and product designer working with clients globally
		</h1>
		<section className='hidden md:flex gap-4 items-center'>
			<h2>Expertise</h2>
			<ul className='flex gap-4'>
				<li>
					<AnnoyingLi>Branding</AnnoyingLi>
				</li>
				<li>
					<AnnoyingLi>Product</AnnoyingLi>
				</li>
				<li>
					<AnnoyingLi>Design Systems</AnnoyingLi>
				</li>
			</ul>
		</section>
		<OHNav />
		<section className='flex flex-col items-center my-32'>
			<h2 className='text-4xl text-center'>Let&apos;s work together.</h2>
			<SafeExternalLink
				href='mailto:oli@oh.studio'
				className='text-4xl text-center text-neutral-600 hover:text-neutral-400 focus-visible:text-neutral-400 focus-visible:outline-4 outline-black rounded-3xl outline-offset-4 transition-all'>
				Get in touch.
			</SafeExternalLink>
		</section>
		<footer className='w-full flex flex-col md:flex-row sm:p-8 py-16 justify-between'>
			<div className='flex flex-col md:flex-row md:gap-2 items-center'>
				<div
					role='image'
					aria-label='OH.STUDIO logo'
					className='text-3xl size-min animate-spin'>
					<IoAdd aria-hidden />
					<IoAdd
						aria-hidden
						className='absolute top-0 left-0 rotate-45'
					/>
				</div>
				<span>&copy; Oli Harris 2023</span>
			</div>
			<nav>
				<ul className='flex gap-4 justify-center'>
					<li>
						<SafeExternalLink
							href='https://twitter.com/olvhrs'
							className='focus-visible:outline outline-black'>
							Twitter
						</SafeExternalLink>
					</li>
					<li>
						<SafeExternalLink
							href='https://www.linkedin.com/in/oliiharris/'
							className='focus-visible:outline outline-black'>
							Linkedin
						</SafeExternalLink>
					</li>
					<li>
						<SafeExternalLink
							href='mailto:oli@oh.studio'
							className='focus-visible:outline outline-black'>
							Mail
						</SafeExternalLink>
					</li>
				</ul>
			</nav>
		</footer>
	</OHMain>
);

export default OHStudioHome;

export const metadata = {
	title: 'oh.studio Clone',
};
