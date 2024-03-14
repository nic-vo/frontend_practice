import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const OriginalNav = (props: { original: string }) => {
	return (
		<li>
			<Link href={props.original}>Original Site</Link>
		</li>
	);
};

export const LayoutNav = (props: { upOne: string }) => {
	return (
		<>
			<li>
				<Link href={props.upOne}>Back to index</Link>
			</li>
			<li>
				<Link
					href='/'
					id='panelHome'>
					Home
				</Link>
			</li>
		</>
	);
};

export const InfoTitle = (props: { title: string }) => {
	return <h2 className='text-3xl font-bold'>{props.title}</h2>;
};

export const PanelNavWrapper = (props: PropsWithChildren) => {
	return (
		<nav className='flex flex-col gap-2 border-t-2 pt-2'>
			<h2 className='text-2xl font-bold'>Links:</h2>
			<ul className='flex gap-2 underline'>{props.children}</ul>
		</nav>
	);
};

export const PanelContentWrapper = (props: PropsWithChildren) => {
	return (
		<section className='flex flex-col flex-grow gap-4 pr-8 overflow-y-auto font-light'>
			{props.children}
		</section>
	);
};

const DualView = (props: {
	children: React.ReactNode;
	panel: React.ReactNode;
}) => {
	const { panel, children } = props;
	return (
		<>
			{children}
			{panel}
		</>
	);
};

export const LayoutDefaultMetadata = {
	title: {
		default: 'Nicolas Vo | A page clone',
		template: 'Nicolas Vo | %s',
	},
};

export default DualView;
