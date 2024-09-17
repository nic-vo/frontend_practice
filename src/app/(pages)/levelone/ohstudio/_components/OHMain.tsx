'use client';

import { PropsWithChildren } from 'react';
import { useOneTimeFade } from './hooks';

const OHMain = ({ children }: PropsWithChildren) => {
	const ref = useOneTimeFade<HTMLElement>();
	return (
		<main
			ref={ref}
			className='pt-64 flex flex-col items-center gap-8 w-full first:*:opacity-100 last:*:opacity-100 *:opacity-0'>
			{children}
		</main>
	);
};

export default OHMain;
