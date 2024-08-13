import { SafeExternalLink } from '@/components/global/Commons';
import { PropsWithChildren } from 'react';

const AbstractGridHeading = (props: PropsWithChildren) => {
	return <h2>{props.children}</h2>;
};

const AbstractGridContent = (props: PropsWithChildren) => {
	return <p>{props.children}</p>;
};

const AbstractGridLink = (props: PropsWithChildren & { href: string }) => {
	return (
		<SafeExternalLink href={props.href}>{props.children}</SafeExternalLink>
	);
};

const AbstractGrid = () => (
	<ul className='flex flex-col md:grid grid-cols-2'></ul>
);

export default AbstractGrid;
