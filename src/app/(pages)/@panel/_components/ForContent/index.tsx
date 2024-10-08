import { PropsWithChildren } from 'react';
import { PanelContentLink } from './client';

export const PanelContentWrapper = ({ children }: PropsWithChildren) => (
	<section className='flex flex-col gap-4 pr-2 mt-4 sm:mt-0 overflow-y-auto shrink'>
		{children}
	</section>
);

export const PanelContentTitle = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <h2 className='text-3xl font-bold'>{children}</h2>;
};

export { PanelContentLink };
