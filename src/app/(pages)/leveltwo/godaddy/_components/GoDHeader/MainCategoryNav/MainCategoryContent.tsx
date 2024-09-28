import {
	IoColorWandOutline,
	IoBrowsersOutline,
	IoCardOutline,
	IoDocumentLockOutline,
	IoFileTrayStackedOutline,
	IoGlobeOutline,
	IoGridOutline,
	IoHammerOutline,
	IoImagesOutline,
	IoLockClosedOutline,
	IoLogoGoogle,
	IoMegaphoneOutline,
	IoMenu,
	IoPencilOutline,
	IoPeopleCircleOutline,
	IoPersonCircleOutline,
	IoPhonePortraitOutline,
	IoPricetagOutline,
	IoQrCodeOutline,
	IoReceiptOutline,
	IoSwapHorizontal,
	IoSearch,
	IoServerOutline,
	IoShieldCheckmarkOutline,
	IoSpeedometerOutline,
	IoStorefrontOutline,
	IoTabletLandscapeOutline,
} from 'react-icons/io5';
import { SiGodaddy } from 'react-icons/si';

import type { SubMenuContentType } from './MainCategoryMenu';

export const DomainsContent: SubMenuContentType = [
	{
		title: 'FIND A DOMAIN',
		links: [
			{
				href: 'domains',
				children: () => (
					<>
						<IoSearch aria-hidden />
						<span>Search for Domain Names</span>
					</>
				),
			},
			{
				href: 'domains/domain-transfer',
				children: () => (
					<>
						<IoSwapHorizontal aria-hidden />
						<span>Transfer Domain Names</span>
					</>
				),
			},
			{
				href: 'domains/gtld-domain-names',
				children: () => (
					<>
						<IoMenu aria-hidden />
						<span>Extensions for Domain Names</span>
					</>
				),
			},
			{
				href: 'subscriptions',
				children: () => (
					<>
						<IoGridOutline aria-hidden />
						<span>Save with Bundles</span>
					</>
				),
			},
		],
	},
	{
		title: 'AUCTIONS FOR DOMAINS',
		links: [
			{
				href: 'https://auctions.godaddy.com',
				children: () => (
					<>
						<IoPeopleCircleOutline aria-hidden />
						<span>Auctions for Domain Names</span>
					</>
				),
			},
			{
				href: 'domain-value-appraisal',
				children: () => (
					<>
						<IoPricetagOutline aria-hidden />
						<span>Appraise Domain Name Value</span>
					</>
				),
			},
		],
	},
	{
		title: 'DOMAIN TOOLS AND SERVICES',
		links: [
			{
				href: 'domains/domain-name-generator',
				children: () => (
					<>
						<IoHammerOutline aria-hidden />
						<span>Generate Domain Names</span>
					</>
				),
			},
			{
				href: 'whois',
				children: () => (
					<>
						<IoGlobeOutline aria-hidden />
						<span>Find a Domain Owner &#40;WHOIS&#41;</span>
					</>
				),
			},
			{
				href: 'domains/domain-broker',
				children: () => (
					<>
						<IoPersonCircleOutline aria-hidden />
						<span>Domain Broker Service</span>
					</>
				),
			},
		],
	},
];

export const WebsitesContent: SubMenuContentType = [
	{
		title: 'GODADDY WEBSITE BUILDER',
		links: [
			{
				href: 'websites/website-builder',
				children: () => (
					<>
						<IoBrowsersOutline aria-hidden />
						<span>Website Builder</span>
					</>
				),
			},
			{
				href: 'website-templates',
				children: () => (
					<>
						<IoImagesOutline aria-hidden />
						<span>Website Templates</span>
					</>
				),
			},
			{
				href: 'websites/online-store',
				children: () => (
					<>
						<IoStorefrontOutline aria-hidden />
						<span>Online Store</span>
					</>
				),
			},
		],
	},
	{
		title: 'HIRE AN EXPERT',
		links: [
			{
				href: 'websites/web-design',
				children: () => (
					<>
						<IoPencilOutline aria-hidden />
						<span>Website Design Services</span>
					</>
				),
			},
			{
				href: 'online-marketing/seo-services',
				children: () => (
					<>
						<IoLogoGoogle aria-hidden />
						<span>SEO Services</span>
					</>
				),
			},
			{
				href: 'online-marketing/digital-marketing-services',
				children: () => (
					<>
						<IoSpeedometerOutline aria-hidden />
						<span>Digital Marketing Services</span>
					</>
				),
			},
		],
	},
	{
		title: 'MARKETING TOOLS',
		links: [
			{
				href: 'online-marketing/digital-marketing',
				children: () => (
					<>
						<IoMegaphoneOutline aria-hidden />
						<span>Digital marketing</span>
					</>
				),
			},
			{
				href: 'logo-maker',
				children: () => (
					<>
						<IoColorWandOutline aria-hidden />
						<span>Logo Maker</span>
					</>
				),
			},
			{
				href: 'conversations',
				children: () => (
					<>
						<IoPhonePortraitOutline aria-hidden />
						<span>Business Phone Number</span>
					</>
				),
			},
		],
	},
];

export const HostingContent: SubMenuContentType = [
	{
		title: 'HOSTING',
		links: [
			{
				href: 'hosting/web-hosting',
				children: () => (
					<>
						<IoFileTrayStackedOutline aria-hidden />
						<span>Web Hosting</span>
					</>
				),
			},
			{
				href: 'hosting/wordpress-hosting',
				children: () => (
					<>
						<IoFileTrayStackedOutline aria-hidden />
						<span>WordPress Hosting</span>
					</>
				),
			},
			{
				href: 'hosting/vps-hosting',
				children: () => (
					<>
						<IoServerOutline aria-hidden />
						<span>VPS Hosting</span>
					</>
				),
			},
		],
	},
	{
		title: 'WEB SECURITY',
		links: [
			{
				href: 'web-security/ssl-certificate',
				children: () => (
					<>
						<IoDocumentLockOutline aria-hidden />
						<span>SSL Certificates</span>
					</>
				),
			},
			{
				href: 'web-security/website-security',
				children: () => (
					<>
						<IoLockClosedOutline aria-hidden />
						<span>Website Security</span>
					</>
				),
			},
			{
				href: 'web-security',
				children: () => (
					<>
						<IoShieldCheckmarkOutline aria-hidden />
						<span>All Web Security Options</span>
					</>
				),
			},
		],
	},
	{
		title: 'GODDADY PRO',
		links: [
			{
				href: 'pro',
				children: () => (
					<>
						<SiGodaddy aria-hidden />
						<span>Tools for Web Professionals</span>
					</>
				),
			},
		],
	},
];

export const CommerceContent: SubMenuContentType = [
	{
		title: 'SELL IN PERSON',
		links: [
			{
				href: 'payments/point-of-sale',
				children: () => (
					<>
						<IoTabletLandscapeOutline aria-hidden />
						<span>Point of Sale &#40;POS&#41; Systems</span>
					</>
				),
			},
			{
				href: 'payments/tap-to-pay',
				children: () => (
					<>
						<IoPhonePortraitOutline aria-hidden />
						<span>Tap to Pay Mobile App</span>
					</>
				),
			},
		],
	},
	{
		title: 'SELL ONLINE',
		links: [
			{
				href: 'websites/online-store',
				children: () => (
					<>
						<IoStorefrontOutline aria-hidden />
						<span>Online Store</span>
					</>
				),
			},
			{
				href: 'hosting/ecommerce-hosting',
				children: () => (
					<>
						<IoFileTrayStackedOutline aria-hidden />
						<span>Managed WooCommerce Stores</span>
					</>
				),
			},
		],
	},
	{
		title: 'PAYMENT PROCESSING',
		links: [
			{
				href: 'payments/invoicing',
				children: () => (
					<>
						<IoReceiptOutline aria-hidden />
						<span>Invoicing</span>
					</>
				),
			},
			{
				href: 'payments/pay-links',
				children: () => (
					<>
						<IoQrCodeOutline aria-hidden />
						<span>Online Pay Links</span>
					</>
				),
			},
			{
				href: 'payments',
				children: () => (
					<>
						<IoCardOutline aria-hidden />
						<span>Accept Payments</span>
					</>
				),
			},
		],
	},
];
