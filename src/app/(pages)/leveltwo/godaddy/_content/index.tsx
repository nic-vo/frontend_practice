import { SafeExternalLink } from '@/components/global/Commons';
import { SiGodaddy } from 'react-icons/si';
import { GoDaddyBaseURL } from '../_components/consts';

export const GoDAIHero = () => (
	<section>
		<hgroup>
			<h2>
				<SiGodaddy aria-hidden />
				<span>GoDaddy Airo</span>
			</h2>
			<p>Meet your AI business partner.</p>
		</hgroup>
		<p>
			Buy a new domain and get GoDaddy Airo&trade;, our customizable, AI-powered
			solution that can easily deliver a website, logo, LLC, and more^.
		</p>
		<SafeExternalLink
			href={GoDaddyBaseURL('airo?itc=hp_commerce_sell_anywhere')}>
			Learn More
		</SafeExternalLink>
	</section>
);
