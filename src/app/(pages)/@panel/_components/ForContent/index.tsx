import { PropsWithChildren } from 'react';
import { PanelContentLink } from './client';

export const PanelContentWrapper = ({ children }: PropsWithChildren) => (
	<section className='w-full overflow-auto'>{children}</section>
);

export const PanelContentTitle = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <h2 className='text-3xl font-bold'>{children}</h2>;
};

export { PanelContentLink };
