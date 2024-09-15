import { SafeExternalLink } from '@/components/global/Commons';
import LobeDLButton from './LobeDLButton';
import { IoChatbubble, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
import { PropsWithChildren } from 'react';
import { dmsans } from '@/styles/fonts';

const SocialBubble = ({
	href,
	children,
}: {
	children: React.ReactNode;
	href: string;
}) => (
	<SafeExternalLink
		href={href}
		className='text-xl md:text-base block w-min text-white p-2 rounded-full bg-teal-400'>
		{children}
	</SafeExternalLink>
);

const ListHeader = ({ children }: PropsWithChildren) => (
	<h2 className='font-bold'>{children}</h2>
);

const ListContainer = ({ children }: PropsWithChildren) => (
	<section className='flex flex-col gap-4 md:gap-8'>{children}</section>
);

const InnerList = ({ children }: PropsWithChildren) => (
	<ul className='flex flex-col gap-2 md:gap-4'>{children}</ul>
);

const LobeFooter = () => (
	<footer className='w-full flex flex-col justify-center items-center sm:items-start sm:flex-row-reverse p-16 pb-32 z-0 border-t border-slate-200 gap-16'>
		<nav>
			<ul className='grid grid-cols-2 sm:flex gap-16 md:gap-24'>
				<li>
					<ListContainer>
						<ListHeader>About</ListHeader>
						<InnerList>
							<li>
								<LobeDLButton reachable />
							</li>
							<li>
								<SafeExternalLink href='https://www.lobe.ai'>
									Overview
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='https://www.lobe.ai/examples'>
									Examples
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='https://www.lobe.ai/blog'>
									Blog
								</SafeExternalLink>
							</li>
						</InnerList>
					</ListContainer>
				</li>
				<li>
					<ListContainer>
						<ListHeader>General</ListHeader>
						<InnerList>
							<li>
								<SafeExternalLink href='https://www.lobe.ai/NOTICE.txt'>
									Notice
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='https://www.lobe.ai/license'>
									License
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='https://news.microsoft.com/microsoft-public-relations-contacts'>
									Press Inquiry
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='https://www.lobe.ai/assets/press/lobe-press-images.zip'>
									Press Images
								</SafeExternalLink>
							</li>
						</InnerList>
					</ListContainer>
				</li>
				<li>
					<ListContainer>
						<ListHeader>Resources</ListHeader>
						<InnerList>
							<li>
								<SafeExternalLink href='https://www.lobe.ai/docs/welcome/welcome'>
									Help
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='https://www.lobe.ai/tour'>
									Tour
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='mailto:lobeai@microsoft.com'>
									Contact
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='https://go.microsoft.com/fwlink/?LinkId=521839'>
									Privacy
								</SafeExternalLink>
							</li>
						</InnerList>
					</ListContainer>
				</li>
				<li>
					<ul className='flex flex-col gap-4 sm:flex-row *:block items-center md:items-start justify-center size-full'>
						<li>
							<SocialBubble href='https://reddit.com/r/lobe'>
								<IoChatbubble aria-hidden />
								<span className='sr-only'>Reddit</span>
							</SocialBubble>
						</li>
						<li>
							<SocialBubble href='https://twitter.com/lobe_ai'>
								<IoLogoTwitter aria-hidden />
								<span className='sr-only'>Twitter</span>
							</SocialBubble>
						</li>
						<li>
							<SocialBubble href='https://www.youtube.com/channel/UCYryctkBIcCszPAFg79rwAw'>
								<IoLogoYoutube aria-hidden />
								<span className='sr-only'>YouTube</span>
							</SocialBubble>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
		<div className='flex flex-col gap-4 items-center md:items-start'>
			<div
				role='image'
				className='flex gap-2 w-max items-center'>
				{' '}
				<span className={'font-bold text-3xl ' + dmsans.className}>lobe</span>
				<div
					role='image'
					aria-hidden
					className='aspect-square size-6'>
					<div className='rounded bg-teal-300 size-2/3 absolute mix-blend-multiply'></div>
					<div className='rounded bg-red-500 size-2/3 absolute mix-blend-multiply bottom-0 right-0'></div>
				</div>
			</div>
			<span>A product by Microsoft.</span>
			<span>All rights reserved.</span>
			<span>&copy; Microsoft 2021</span>
		</div>
	</footer>
);

export default LobeFooter;
