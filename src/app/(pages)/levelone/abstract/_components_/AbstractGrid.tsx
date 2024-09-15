import { SafeExternalLink } from '@/components/global/Commons';
import {
	IoGitMerge,
	IoPeopleOutline,
	IoExtensionPuzzleOutline,
	IoCardOutline,
	IoKeyOutline,
	IoChatboxEllipsesOutline,
} from 'react-icons/io5';
import { PropsWithChildren } from 'react';

const GridHeading = (props: PropsWithChildren) => {
	return <h2 className='font-bold'>{props.children}</h2>;
};

const GridLink = (props: { href: string }) => {
	return (
		<SafeExternalLink
			href={props.href}
			className='text-indigo-500 block w-max hover:underline focus-visible:outline outline-indigo-500 outline-offset-8 rounded-xl'>
			Learn More &rarr;
		</SafeExternalLink>
	);
};

const GridLI = (props: PropsWithChildren) => {
	return (
		<li>
			<div className='flex gap-4 md:gap-8 items-center'>{props.children}</div>
		</li>
	);
};

const GridIconContainer = (props: { children: React.ReactNode }) => (
	<div className='text-6xl sm:text-8xl text-indigo-500 *:block shrink-0 *:shrink-0'>
		{props.children}
	</div>
);
const GridLISection = (props: PropsWithChildren) => (
	<section className='flex flex-col gap-4 *:max-w-screen-sm'>
		{props.children}
	</section>
);

const AbstractGrid = () => (
	<ul className='flex flex-col md:grid grid-cols-2 gap-16 p-8 py-32 md:p-16 text-xl max-w-screen-2xl'>
		<GridLI>
			<GridIconContainer>
				<IoGitMerge aria-hidden />
			</GridIconContainer>
			<GridLISection>
				<GridHeading>Using Abstract</GridHeading>
				<p>
					Abstract lets you manage, version, and document your designs in one
					place.
				</p>
				<GridLink href='https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract' />
			</GridLISection>
		</GridLI>
		<GridLI>
			<GridIconContainer>
				<IoPeopleOutline aria-hidden />
			</GridIconContainer>
			<GridLISection>
				<GridHeading>Manage your account</GridHeading>
				<p>
					Configure your account settings, such as your email, profile details,
					and password.
				</p>
				<GridLink href='https://help.abstract.com/hc/en-us/categories/360005449431-Manage-your-account' />
			</GridLISection>
		</GridLI>
		<GridLI>
			<GridIconContainer>
				<IoExtensionPuzzleOutline aria-hidden />
			</GridIconContainer>
			<GridLISection>
				<GridHeading>Manage organizations, teams, and projects</GridHeading>
				<p>
					Use Abstract organizations, teams, and projects to organize your
					people and your work.
				</p>
				<GridLink href='https://help.abstract.com/hc/en-us/categories/360005449531-Manage-organizations-teams-and-projects' />
			</GridLISection>
		</GridLI>
		<GridLI>
			<GridIconContainer>
				<IoCardOutline aria-hidden />
			</GridIconContainer>
			<GridLISection>
				<GridHeading>Manage billing</GridHeading>
				<p>Change subscriptions and payment details.</p>
				<GridLink href='https://help.abstract.com/hc/en-us/categories/360005436672-Manage-billing' />
			</GridLISection>
		</GridLI>
		<GridLI>
			<GridIconContainer>
				<IoKeyOutline aria-hidden />
			</GridIconContainer>
			<GridLISection>
				<GridHeading>Authenticate to Abstract</GridHeading>
				<p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
				<GridLink href='https://help.abstract.com/hc/en-us/categories/360005436592-Authenticate-to-Abstract' />
			</GridLISection>
		</GridLI>
		<GridLI>
			<GridIconContainer>
				<IoChatboxEllipsesOutline aria-hidden />
			</GridIconContainer>
			<GridLISection>
				<GridHeading>Abstract support</GridHeading>
				<p>Get in touch with a human.</p>
				<GridLink href='https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support' />
			</GridLISection>
		</GridLI>
	</ul>
);

export default AbstractGrid;
