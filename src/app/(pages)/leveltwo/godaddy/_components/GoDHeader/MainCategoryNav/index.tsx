import { SiGodaddy } from 'react-icons/si';
import { GoDaddyBaseURL } from '../../consts';
import {
	GoDCloseMainCategoryButton,
	CommerceSection,
	DomainsSection,
	FauxButtonLink,
	HostingSection,
	GoDMainCategoryContainer,
	MainCategoryContextProvider,
	GoDOpenMainCategoryButton,
	ToggleWatcherContextProvider,
	WebsitesSection,
} from './MainCategoryMenu';
import {
	IoCartOutline,
	IoHelpCircleOutline,
	IoPersonOutline,
} from 'react-icons/io5';

const MainCategoryNav = () => (
	<ToggleWatcherContextProvider>
		<MainCategoryContextProvider>
			<GoDOpenMainCategoryButton />
			<GoDMainCategoryContainer>
				<nav className='z-10 text-neutral-950 h-full lg:h-auto lg:bg-transparent lg:text-inherit w-full p-2 lg:p-0 overflow-y-auto lg:overflow-visible'>
					<ul className='flex flex-col gap-4 lg:flex-row *:flex *:flex-col *:gap-2'>
						<li>
							<FauxButtonLink
								href={GoDaddyBaseURL('')}
								className='hover:lg:bg-neutral-600 lg:focus-visible:outline-emerald-400'>
								<SiGodaddy aria-hidden />
								<span className='block'>GoDaddy&trade;</span>
							</FauxButtonLink>
						</li>
						<li>
							<DomainsSection />
						</li>
						<li>
							<WebsitesSection />
						</li>
						<li>
							<FauxButtonLink
								href={GoDaddyBaseURL('email')}
								className='hover:lg:bg-neutral-600 lg:focus-visible:outline-emerald-400'>
								Email
							</FauxButtonLink>
						</li>
						<li>
							<HostingSection />
						</li>
						<li>
							<CommerceSection />
						</li>
						<li>
							<FauxButtonLink
								href={GoDaddyBaseURL('airo')}
								className='hover:lg:bg-neutral-600 lg:focus-visible:outline-emerald-400'>
								GoDaddy Airo &trade;
							</FauxButtonLink>
						</li>
						<li className='lg:hidden'>
							<FauxButtonLink
								href={GoDaddyBaseURL('help')}
								className='hover:lg:bg-neutral-600 lg:focus-visible:outline-emerald-400'>
								<IoHelpCircleOutline aria-hidden />
								<span>Help Center</span>
							</FauxButtonLink>
						</li>
						<li className='lg:hidden'>
							<FauxButtonLink href='https://account.godaddy.com'>
								<IoPersonOutline aria-hidden />
								<span>Account</span>
							</FauxButtonLink>
						</li>
						<li className='lg:hidden'>
							<FauxButtonLink href='https://cart.godaddy.com'>
								<IoCartOutline aria-hidden />
								<span>Basket</span>
							</FauxButtonLink>
						</li>
					</ul>
				</nav>
				<GoDCloseMainCategoryButton />
			</GoDMainCategoryContainer>
		</MainCategoryContextProvider>
	</ToggleWatcherContextProvider>
);

export default MainCategoryNav;
