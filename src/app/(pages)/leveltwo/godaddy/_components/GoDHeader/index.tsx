import { SafeExternalLink } from '@/components/global/Commons';
import {
	OpenGoDMainCategoryButton,
	GoDMainCategoryContextProvider,
	GoDMainCategoryContainer,
	CloseGoDMainCategoryButton,
} from './MainCategoryMenu';
import { SiGodaddy } from 'react-icons/si';
import { GoDaddyBaseURL } from '../consts';
import {
	IoCartOutline,
	IoHelpCircleOutline,
	IoPersonOutline,
} from 'react-icons/io5';

const GoDHeader = () => (
	<header className='flex gap-4 p-4 bg-neutral-800 text-neutral-50'>
		<GoDMainCategoryContextProvider>
			<OpenGoDMainCategoryButton />
			<SafeExternalLink
				href={GoDaddyBaseURL}
				className='flex gap-1 items-center'>
				<SiGodaddy aria-hidden />
				<span className='block'>GoDaddy&trade;</span>
			</SafeExternalLink>
			<GoDMainCategoryContainer>
				<nav className='z-10 bg-neutral-100 text-neutral-950 p-4'>
					<ul className='flex flex-col lg:flex-row'>
						<li>
							<SafeExternalLink
								href={GoDaddyBaseURL}
								className='flex gap-1 items-center'>
								<SiGodaddy aria-hidden />
								<span className='block'>GoDaddy&trade;</span>
							</SafeExternalLink>
						</li>
						<li>
							<button>Domains</button>
						</li>
						<li>
							<button>Websites</button>
						</li>
						<li>
							<SafeExternalLink href={GoDaddyBaseURL + 'email'}>
								Email
							</SafeExternalLink>
						</li>
						<li>
							<button>Hosting and SSL</button>
						</li>
						<li>
							<button>Commerce</button>
						</li>
						<li>
							<button>GoDaddy Airo &trade;</button>
						</li>
						<li>
							<button>Pricing</button>
						</li>
						<li>
							<SafeExternalLink
								href={GoDaddyBaseURL + 'help'}
								className='flex gap-2 items-center'>
								<IoHelpCircleOutline aria-hidden />
								<span>Help Center</span>
							</SafeExternalLink>
						</li>
						<li>
							<SafeExternalLink
								href='https://account.godaddy.com'
								className='flex gap-2 items-center'>
								<IoPersonOutline aria-hidden />
								<span>Account</span>
							</SafeExternalLink>
						</li>
						<li>
							<SafeExternalLink
								href='https://cart.godaddy.com'
								className='flex gap-2 items-center'>
								<IoCartOutline aria-hidden />
								<span>Basket</span>
							</SafeExternalLink>
						</li>
					</ul>
				</nav>
				<CloseGoDMainCategoryButton />
			</GoDMainCategoryContainer>
		</GoDMainCategoryContextProvider>
	</header>
);

export default GoDHeader;
