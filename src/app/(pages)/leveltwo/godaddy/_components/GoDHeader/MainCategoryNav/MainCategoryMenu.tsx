'use client';

import { SCREEN_LG } from '@/consts/tailwind';
import {
	createToggleMenuContext,
	ToggleMenuContextProvider,
} from '@/hooks/ForMenus';
import { createContext, useContext, useEffect, useState } from 'react';
import { IoCaretUp, IoClose, IoMenu } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';
import { GoDaddyBaseURL } from '../../consts';
import { SafeExternalLink } from '@/components/global/Commons';
import {
	CommerceContent,
	DomainsContent,
	HostingContent,
	WebsitesContent,
} from './MainCategoryContent';

import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import type { ToggleMenuContextType } from '@/hooks/ForMenus';
import { GoDHeaderStyler } from '../styling';

const ToggleWatcherContext = createContext<{
	active: null | number;
	setActive: Dispatch<SetStateAction<null | number>>;
}>({ active: null, setActive: () => {} });

const MainCategoryContext = createToggleMenuContext();

const MainCategoryAriaName = 'main-category-list';

export const GoDOpenMainCategoryButton = () => {
	const { toggled, setToggled } = useContext(MainCategoryContext);
	return (
		<button
			onClick={() => setToggled((prev) => !prev)}
			className='lg:hidden p-4 focus-visible:outline outline-emerald-400 -outline-offset-2'
			aria-controls={MainCategoryAriaName}
			aria-expanded={toggled}>
			{toggled ? <IoClose aria-hidden /> : <IoMenu aria-hidden />}
			<span className='sr-only'>Toggle main navigation menu</span>
		</button>
	);
};

export const GoDCloseMainCategoryButton = () => {
	const { setToggled } = useContext(MainCategoryContext);
	return (
		<button
			onClick={() => setToggled(false)}
			className='absolute top-4 right-4 z-20 lg:hidden text-black p-2 text-2xl rounded-full hover:bg-neutral-950 hover:text-neutral-50 focus-visible:bg-neutral-950 focus-visible:text-neutral-50 outline-none'>
			<IoClose aria-hidden />
			<span className='sr-only'>Close main navigation menu</span>
		</button>
	);
};

export const GoDMainCategoryContainer = ({ children }: PropsWithChildren) => {
	const { toggled } = useContext(MainCategoryContext);
	return (
		<div
			className={twMerge([
				toggled ? 'flex' : 'hidden lg:flex',
				'fixed w-full lg:w-auto top-0 left-0 lg:top-auto lg:left-auto items-start lg:items-center lg:relative h-screen lg:h-auto after:z-0 after:content-[""] after:h-screen after:w-screen after:fixed lg:after:hidden after:backdrop-brightness-50 after:top-0 after:left-0 z-10',
			])}
			aria-expanded={toggled}
			id={MainCategoryAriaName}>
			{children}
		</div>
	);
};

export const MainCategoryContextProvider = ({
	children,
}: PropsWithChildren) => (
	<ToggleMenuContextProvider
		ContextToProvide={MainCategoryContext}
		breakpoint={SCREEN_LG}
		checkBreakpointOnMount>
		{children}
	</ToggleMenuContextProvider>
);

const SubMenuToggleButton = ({
	children,
	contextToRead,
	sharedAriaID,
	toggleWatcherIndex,
}: Required<PropsWithChildren> & {
	contextToRead: ToggleMenuContextType;
	sharedAriaID: string;
	toggleWatcherIndex: number;
}) => {
	const { toggled, setToggled } = useContext(contextToRead);
	const { toggled: grandparentToggled } = useContext(MainCategoryContext);
	const { active, setActive } = useContext(ToggleWatcherContext);

	const clickHandler = () => {
		setActive(toggleWatcherIndex);
		setToggled((prev) => !prev);
	};

	useEffect(() => {
		if (!grandparentToggled) setToggled(false);
	}, [grandparentToggled]);

	useEffect(() => {
		if (active !== toggleWatcherIndex) setToggled(false);
	}, [active]);

	return (
		<button
			tabIndex={grandparentToggled ? 0 : -1}
			aria-controls={sharedAriaID}
			aria-expanded={
				toggled && active === toggleWatcherIndex && grandparentToggled
			}
			onClick={clickHandler}
			className={GoDHeaderStyler([
				toggled
					? 'text-neutral-50 bg-neutral-950 lg:text-neutral-950 lg:bg-neutral-50'
					: 'hover:bg-neutral-200 hover:lg:bg-neutral-600',
			])}
			disabled={!grandparentToggled}>
			{children}
			<IoCaretUp
				aria-hidden
				className={
					toggled && active === toggleWatcherIndex && grandparentToggled
						? 'rotate-0 group-hover:rotate-90'
						: 'rotate-180 group-hover:rotate-90'
				}
			/>
		</button>
	);
};

const SubMenuLink = ({
	href,
	children,
	toggleFromParent,
}: Required<PropsWithChildren> & {
	href: string;
	toggleFromParent: boolean;
}) => (
	<SafeExternalLink
		href={/^https:\/\//.test(href) ? href : GoDaddyBaseURL(href)}
		tabIndex={toggleFromParent ? 0 : -1}
		className='flex gap-2 *:block items-center first:*:text-4xl first:*:bg-emerald-200 first:*:p-2 p-2 first:*:shrink-0 first:*:rounded-2xl w-max hover:bg-neutral-200 rounded-lg focus-visible:outline outline-black font-semibold'>
		{children}
	</SafeExternalLink>
);

export type SubMenuContentType = {
	title: string;
	links: { href: string; children: () => JSX.Element }[];
}[];

const SubMenuList = ({
	localContext,
	content,
	sharedAriaID,
	toggleWatcherIndex,
}: {
	sharedAriaID: string;
	localContext: ToggleMenuContextType;
	content: SubMenuContentType;
	toggleWatcherIndex: number;
}) => {
	const { toggled } = useContext(localContext);
	const { toggled: grandparentToggled } = useContext(MainCategoryContext);
	const { active } = useContext(ToggleWatcherContext);
	return (
		<ul
			tabIndex={
				toggled && grandparentToggled && active === toggleWatcherIndex ? 0 : -1
			}
			id={sharedAriaID}
			className={twMerge([
				'top-0 lg:top-14 lg:absolute lg:left-0 lg:w-max lg:drop-shadow flex-col gap-4 grow outline focus-visible:outline-emerald-400 outline-black rounded-lg lg:rounded-none lg:-outline-offset-2 pl-8 py-4 lg:bg-neutral-50 lg:text-neutral-950',
				toggled && grandparentToggled && active === toggleWatcherIndex
					? 'flex'
					: 'hidden',
			])}>
			{content.map(({ title, links }) => (
				<li key={title.replaceAll(' ', '-')}>
					<section>
						<h2 className='font-semibold text-neutral-500'>{title}</h2>
						<ul
							tabIndex={
								toggled && grandparentToggled && active === toggleWatcherIndex
									? 0
									: -1
							}
							className='focus-visible:outline outline-black rounded-lg w-max ml-4'>
							{links.map(({ href, children }) => (
								<li key={href}>
									<SubMenuLink
										toggleFromParent={
											toggled &&
											grandparentToggled &&
											active === toggleWatcherIndex
										}
										href={href}>
										{children()}
									</SubMenuLink>
								</li>
							))}
						</ul>
					</section>
				</li>
			))}
		</ul>
	);
};

const DomainsContext = createToggleMenuContext();
export const DomainsSection = () => {
	const sharedAriaID = 'main-nav-domains';
	const toggleWatcherIndex = 0;
	return (
		<ToggleMenuContextProvider
			breakpoint={SCREEN_LG}
			ContextToProvide={DomainsContext}>
			<SubMenuToggleButton
				contextToRead={DomainsContext}
				toggleWatcherIndex={toggleWatcherIndex}
				sharedAriaID={sharedAriaID}>
				Domains
			</SubMenuToggleButton>
			<SubMenuList
				toggleWatcherIndex={toggleWatcherIndex}
				sharedAriaID={sharedAriaID}
				localContext={DomainsContext}
				content={DomainsContent}
			/>
		</ToggleMenuContextProvider>
	);
};

const WebsitesContext = createToggleMenuContext();
export const WebsitesSection = () => {
	const sharedAriaID = 'main-nav-websites';
	const toggleWatcherIndex = 1;
	return (
		<ToggleMenuContextProvider
			ContextToProvide={WebsitesContext}
			breakpoint={SCREEN_LG}>
			<SubMenuToggleButton
				contextToRead={WebsitesContext}
				sharedAriaID={sharedAriaID}
				toggleWatcherIndex={toggleWatcherIndex}>
				Websites
			</SubMenuToggleButton>
			<SubMenuList
				toggleWatcherIndex={toggleWatcherIndex}
				localContext={WebsitesContext}
				sharedAriaID={sharedAriaID}
				content={WebsitesContent}
			/>
		</ToggleMenuContextProvider>
	);
};

const HostingContext = createToggleMenuContext();
export const HostingSection = () => {
	const sharedAriaID = 'main-nav-hosting';
	const toggleWatcherIndex = 2;
	return (
		<ToggleMenuContextProvider
			ContextToProvide={HostingContext}
			breakpoint={SCREEN_LG}>
			<SubMenuToggleButton
				contextToRead={HostingContext}
				sharedAriaID={sharedAriaID}
				toggleWatcherIndex={toggleWatcherIndex}>
				Hosting and Security
			</SubMenuToggleButton>
			<SubMenuList
				toggleWatcherIndex={toggleWatcherIndex}
				sharedAriaID={sharedAriaID}
				content={HostingContent}
				localContext={HostingContext}
			/>
		</ToggleMenuContextProvider>
	);
};

const CommerceContext = createToggleMenuContext();
export const CommerceSection = () => {
	const sharedAriaID = 'main-nav-commerce';
	const toggleWatcherIndex = 3;
	return (
		<ToggleMenuContextProvider
			ContextToProvide={CommerceContext}
			breakpoint={SCREEN_LG}>
			<SubMenuToggleButton
				contextToRead={CommerceContext}
				toggleWatcherIndex={toggleWatcherIndex}
				sharedAriaID={sharedAriaID}>
				Commerce
			</SubMenuToggleButton>
			<SubMenuList
				toggleWatcherIndex={toggleWatcherIndex}
				content={CommerceContent}
				sharedAriaID={sharedAriaID}
				localContext={CommerceContext}
			/>
		</ToggleMenuContextProvider>
	);
};

export const FauxButtonLink = ({
	children,
	href,
	className,
}: Required<PropsWithChildren> & { href: string; className?: string }) => {
	const { toggled } = useContext(MainCategoryContext);
	return (
		<SafeExternalLink
			href={href}
			tabIndex={toggled ? 0 : -1}
			className={GoDHeaderStyler([className ?? ''])}>
			{children}
		</SafeExternalLink>
	);
};

export const ToggleWatcherContextProvider = ({
	children,
}: PropsWithChildren) => {
	const [active, setActive] = useState<number | null>(null);
	return (
		<ToggleWatcherContext.Provider value={{ active, setActive }}>
			{children}
		</ToggleWatcherContext.Provider>
	);
};
