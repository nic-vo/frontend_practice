import { SafeExternalLink } from '@/components/global/Commons';
import { PropsWithChildren } from 'react';
import {
	GoDSearchDialogContainer,
	GoDSearchForm,
	GoDSearchToggleContextProvider,
	GoDToggleSearchButton,
} from './client';
import {
	IoChatboxEllipsesOutline,
	IoGlobeOutline,
	IoHelpCircleOutline,
	IoPricetagOutline,
	IoSpeedometerOutline,
} from 'react-icons/io5';
import { GoDaddyBaseURL } from '../../consts';

const SearchQuickLink = ({
	children,
	href,
}: PropsWithChildren & { href: string }) => (
	<SafeExternalLink
		href={href}
		className='*:text-3xl flex gap-2'>
		{children}
	</SafeExternalLink>
);

const SearchPopLink = ({
	children,
	href,
}: PropsWithChildren & { href: string }) => (
	<SafeExternalLink href={href}>{children}</SafeExternalLink>
);

const LocalSearchHref = (query: string) => {
	const params = new URLSearchParams({ q: query });
	return GoDaddyBaseURL('site-search-page?query=' + params.toString());
};
const GoDSearchDialog = () => (
	<GoDSearchToggleContextProvider>
		<GoDToggleSearchButton />
		<GoDSearchDialogContainer>
			<GoDSearchForm />
			<nav>
				<section>
					<h3>POPULAR SEARCH TERMS</h3>
					<ul>
						<li>
							<SearchPopLink href={LocalSearchHref('website builder')}>
								website builder
							</SearchPopLink>
						</li>
						<li>
							<SearchPopLink href={LocalSearchHref('whois')}>
								whois
							</SearchPopLink>
						</li>
						<li>
							<SearchPopLink href={LocalSearchHref('email')}>
								email
							</SearchPopLink>
						</li>
						<li>
							<SearchPopLink href={LocalSearchHref('domain')}>
								domain
							</SearchPopLink>
						</li>
						<li>
							<SearchPopLink href={LocalSearchHref('payments')}>
								payments
							</SearchPopLink>
						</li>
					</ul>
				</section>
				<section className='hidden lg:block'>
					<h3>QUICK LINKS</h3>
					<ul>
						<li>
							<SearchQuickLink href={GoDaddyBaseURL('domains')}>
								<IoGlobeOutline aria-hidden />
								<span>Domain Search</span>
							</SearchQuickLink>
						</li>
						<li>
							<SearchQuickLink href={GoDaddyBaseURL('help?src=site_search')}>
								<IoHelpCircleOutline aria-hidden />
								<span>Help Center</span>
							</SearchQuickLink>
						</li>
						<li>
							<SearchQuickLink href={GoDaddyBaseURL('pricing')}>
								<IoPricetagOutline aria-hidden />
								<span>Plans &amp; pricing</span>
							</SearchQuickLink>
						</li>
						<li>
							<SearchQuickLink href={GoDaddyBaseURL('products')}>
								<IoSpeedometerOutline aria-hidden />
								<span>Account - My Products</span>
							</SearchQuickLink>
						</li>
						<li>
							<SearchQuickLink href={GoDaddyBaseURL('hire-an-expert')}>
								<IoChatboxEllipsesOutline aria-hidden />
								<span>Hire an Expert</span>
							</SearchQuickLink>
						</li>
					</ul>
				</section>
			</nav>
		</GoDSearchDialogContainer>
	</GoDSearchToggleContextProvider>
);

export default GoDSearchDialog;
