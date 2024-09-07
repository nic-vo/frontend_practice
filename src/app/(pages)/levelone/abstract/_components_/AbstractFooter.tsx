import { SafeExternalLink } from '@/components/global/Commons';
import { PropsWithChildren } from 'react';
import { CgAbstract } from 'react-icons/cg';

const SubListLink = ({ display, href }: { display: string; href: string }) => (
	<SafeExternalLink
		href={href}
		className='block w-max rounded-lg hover:underline focus-visible:outline outline-offset-2 outline-white'>
		{display}
	</SafeExternalLink>
);

const SubListHeading = (props: PropsWithChildren) => (
	<h2 className='font-black block text-2xl'>{props.children}</h2>
);

const SubListSection = (props: PropsWithChildren) => (
	<section className='flex flex-col gap-4 font-light'>{props.children}</section>
);

const FooterSubList = ({
	hrefs,
}: {
	hrefs: { display: string; href: string }[];
}) => (
	<ul>
		{hrefs.map((props) => (
			<li key={props.display}>
				<SubListLink {...props} />
			</li>
		))}
	</ul>
);

const AbstractFooter = () => {
	return (
		<footer className='bg-black text-white p-8 flex flex-col md:flex-row justify-between gap-8'>
			<nav className='w-full flex md:justify-center'>
				<ul className='flex flex-col flex-wrap sm:flex-row gap-8'>
					<li>
						<SubListSection>
							<SubListHeading>Abstract</SubListHeading>
							<FooterSubList
								hrefs={[
									{
										display: 'Start Trial',
										href: 'https://app.abstract.com/start-branches-trial',
									},
									{
										display: 'Pricing',
										href: 'https://www.abstract.com/pricing',
									},
									{
										display: 'Download',
										href: 'https://app.abstract.com/download',
									},
								]}
							/>
						</SubListSection>
					</li>
					<li>
						<SubListSection>
							<SubListHeading>Resources</SubListHeading>
							<FooterSubList
								hrefs={[
									{
										display: 'Blog',
										href: 'https://www.abstract.com/blog',
									},
									{
										display: 'Help Center',
										href: 'https://www.abstract.com/help',
									},
									{
										display: 'Release Notes',
										href: 'https://www.abstract.com/release-notes',
									},
									{
										display: 'Status',
										href: 'https://status.abstract.com/',
									},
								]}
							/>
						</SubListSection>
					</li>
					<li>
						<SubListSection>
							<SubListHeading>Community</SubListHeading>
							<FooterSubList
								hrefs={[
									{
										display: 'Twitter',
										href: 'https://twitter.com/goabstract',
									},
									{
										display: 'LinkedIn',
										href: 'https://www.linkedin.com/company/17950473/',
									},
									{
										display: 'Facebook',
										href: 'https://facebook.com/Abstract/',
									},
									{ display: 'Dribble', href: 'https://dribbble.com/abstract' },
									{
										display: 'Podcast',
										href: 'https://www.abstract.com/podcast',
									},
								]}
							/>
						</SubListSection>
					</li>
					<li>
						<SubListSection>
							<SubListHeading>Company</SubListHeading>
							<FooterSubList
								hrefs={[
									{
										display: 'About Us',
										href: 'https://www.abstract.com/about',
									},
									{ display: 'Careers', href: 'https://abstract.breezy.hr/' },
									{ display: 'Legal', href: 'https://www.abstract.com/legal' },
								]}
							/>
							<section>
								<h3 className='font-black'>Contact Us</h3>
								<SubListLink
									href='mailto:info@abstract.com'
									display='info@abstract.com'
								/>
							</section>
						</SubListSection>
					</li>
				</ul>
			</nav>
			<section className='flex flex-col gap-4 md:self-end shrink-0'>
				<div
					role='heading'
					aria-level={2}
					aria-label='Copyright Info'
					className='rounded-xl bg-white text-black size-max'>
					<CgAbstract
						aria-hidden
						className='block text-4xl'
					/>
				</div>
				<ul>
					<li>&copy; Copyright 2024</li>
					<li>Abstract Studio Design, Inc.</li>
					<li>All rights reserved</li>
				</ul>
			</section>
		</footer>
	);
};

export default AbstractFooter;
