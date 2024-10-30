'use client';

import type { StaticImageData } from 'next/image';
import { GoDaddyBaseURL } from '../../_components/consts';

type ContentPanelType = {
	Heading: JSX.Element;
	link: { display: string; href: string };
	// image: StaticImageData;
	copy: string;
};

const Content: {
	display: string;
	primary: ContentPanelType;
	secondary: ContentPanelType;
	tertiary: ContentPanelType;
}[] = [
	{
		display: 'Recommended',
		primary: {
			Heading: <h3>Websites</h3>,
			link: {
				display: 'Create your site',
				href: GoDaddyBaseURL('websites/website-builder'),
			},
			copy: 'Start for free and get your business online and growing with built-in AI and marketing tools.',
		},
		secondary: {
			Heading: <h3>WordPress</h3>,
			link: {
				display: 'Explore WordPress Plans',
				href: GoDaddyBaseURL('hosting/wordpress-hosting'),
			},
			copy: 'All plans are fully-managed with pre-installed plugins and themes.',
		},
		tertiary: {
			Heading: <h3>Web Design Services</h3>,
			link: {
				display: 'Get a Free Consultation',
				href: GoDaddyBaseURL('websites/web-design'),
			},
			copy: "We can build you a scroll-stopping website that's afordable.",
		},
	},
	{
		display: 'Create a website',
		primary: {
			Heading: (
				<hgroup>
					<h3>Websites</h3>
					<p>NO TECH SKILLS NEEDED</p>
				</hgroup>
			),
			link: {
				display: 'Create your site',
				href: GoDaddyBaseURL('websites/website-builder'),
			},
			copy: 'Start for free and design a beautiful, mobile-friendly site.',
		},

		secondary: {
			Heading: <h3>Domains</h3>,
			link: {
				display: 'Search Domains',
				href: GoDaddyBaseURL('domains'),
			},
			copy: 'Get started with a .com domain, which comes with free domain privacy protection forever.',
		},
		tertiary: {
			Heading: <h3>Email &amp; Microsoft 365</h3>,
			link: {
				display: 'Get Business Email',
				href: GoDaddyBaseURL('email'),
			},
			copy: 'Get email that matches your domain to help build trust and sales',
		},
	},
	{
		display: 'Security & Hosting',
		primary: {
			Heading: (
				<hgroup>
					<h3>SSL Certificates</h3>
					<p>RECOMMENDED</p>
				</hgroup>
			),
			link: {
				display: 'Secure Your Data',
				href: GoDaddyBaseURL('web-security/ssl-certificate'),
			},
			copy: 'Help keep sensitive data secure on your site and boost search ranking with an SSL Certificate.',
		},
		secondary: {
			Heading: <h3>Web Hosting</h3>,
			link: {
				display: 'View Plans and Pricing',
				href: GoDaddyBaseURL('hosting/web-hosting'),
			},
			copy: 'Get superior performance, fast load times, and 99.9% uptime guaranteed.***',
		},
		tertiary: {
			Heading: <h3>WordPress</h3>,
			link: {
				display: 'Explore WordPress Plans',
				href: GoDaddyBaseURL('hosting/wordpress-hosting'),
			},
			copy: 'Let AI build your fully-managed site, worry-free.',
		},
	},
	{
		display: 'Market and Sell',
		primary: {
			Heading: <h3>Digital Marketing</h3>,
			link: {
				display: 'Grow your brand',
				href: GoDaddyBaseURL('online-marketing/digital-marketing-suite'),
			},
			copy: 'Let AI create social posts, online ads, and branded content that grab attention.',
		},

		secondary: {
			Heading: <h3>Online Store</h3>,
			link: {
				display: 'Build Your Store',
				href: GoDaddyBaseURL('websites/online-store'),
			},
			copy: 'Choose from 100s of templates and sell on top marketplaces like Amazon.',
		},
		tertiary: {
			Heading: <h3>Managed WooCommerce Stores</h3>,
			link: {
				display: 'Sell Online Easily',
				href: GoDaddyBaseURL('hosting/ecommerce-hosting'),
			},
			copy: 'Sell online with 1000s of free plugins, inventory management, and payments.',
		},
	},
];
