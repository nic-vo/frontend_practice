import { SafeExternalLink } from '@/components/global/Commons';
import { IoAdd } from 'react-icons/io5';
import { OHHeader, OHNav } from './_components';

export default function OhStudioHomepage() {
	return (
		<main className='py-64 flex flex-col items-center gap-8 w-full'>
			<OHHeader />
			<h1 className='text-4xl font-semibold text-center'>
				A brand and product designer working with clients globally
			</h1>
			<section className='hidden md:flex gap-4'>
				<h2>Expertise</h2>
				<ul className='flex gap-4'>
					<li>Branding</li>
					<li>Product</li>
					<li>Design Systems</li>
				</ul>
			</section>
			<OHNav />
			<section>
				<h2>Let&apos;s work together.</h2>
				<SafeExternalLink href='mailto:oli@oh.studio'>
					Get in touch.
				</SafeExternalLink>
			</section>
			<footer className='w-full flex flex-col md:flex-row justify-between'>
				<div className='flex flex-col md:flex-row md:gap-2 items-center'>
					<div
						role='image'
						aria-label='OH.STUDIO logo'
						className='text-3xl size-min'>
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
							<SafeExternalLink href='https://twitter.com/olvhrs'>
								Twitter
							</SafeExternalLink>
						</li>
						<li>
							<SafeExternalLink href='https://www.linkedin.com/in/oliiharris/'>
								Linkedin
							</SafeExternalLink>
						</li>
						<li>
							<SafeExternalLink href='mailto:oli@oh.studio'>
								Mail
							</SafeExternalLink>
						</li>
					</ul>
				</nav>
			</footer>
		</main>
	);
}

export const metadata = {
	title: 'oh.studio Clone',
};
