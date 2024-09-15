import { SafeExternalLink } from '@/components/global/Commons';
import {
	LobeToggleNav,
	LobeToggleNavButton,
	LobeToggleMenuProvider,
	LobeHeaderLink,
	HeaderDLButton,
	LobeHeaderParent,
} from './client';
import { dmsans } from '@/styles/fonts';

const LobeHeader = () => (
	<LobeToggleMenuProvider>
		<LobeHeaderParent>
			<SafeExternalLink
				href='https://www.lobe.ai'
				className='flex gap-2 w-max items-center focus-visible:outline outline-black outline-offset-2 rounded-sm'>
				<span className={'font-bold text-3xl ' + dmsans.className}>lobe</span>
				<div
					role='image'
					aria-hidden
					className='aspect-square size-6'>
					<div className='rounded bg-teal-300 size-2/3 absolute mix-blend-multiply'></div>
					<div className='rounded bg-red-500 size-2/3 absolute mix-blend-multiply bottom-0 right-0'></div>
				</div>
			</SafeExternalLink>
			<LobeToggleNavButton />
			<LobeToggleNav>
				<ul className='*:block flex flex-col md:flex-row gap-4 p-4 md:p-0 md:gap-8 md:items-center grow md:justify-center md:first:*:ml-auto font-semibold text-lg'>
					<li>
						<LobeHeaderLink href='https://www.lobe.ai'>Overview</LobeHeaderLink>
					</li>
					<li>
						<LobeHeaderLink href='https://www.lobe.ai/examples'>
							Examples
						</LobeHeaderLink>
					</li>
					<li>
						<LobeHeaderLink href='https://www.lobe.ai/tour'>
							Tour
						</LobeHeaderLink>
					</li>
					<li>
						<LobeHeaderLink href='https://www.lobe.ai/blog'>
							Blog
						</LobeHeaderLink>
					</li>
					<li>
						<LobeHeaderLink href='https://www.lobe.ai/docs/welcome/welcome'>
							Help
						</LobeHeaderLink>
					</li>
					<li className='md:ml-auto'>
						<HeaderDLButton />
					</li>
				</ul>
			</LobeToggleNav>
		</LobeHeaderParent>
	</LobeToggleMenuProvider>
);

export default LobeHeader;
