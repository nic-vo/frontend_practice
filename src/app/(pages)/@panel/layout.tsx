'use client';

import { TogglePanel } from '@/app/(pages)/@panel/_components';

import { PropsWithChildren } from 'react';

const PanelLayout = (props: PropsWithChildren) => {
	return (
		<TogglePanel>
			{/*

			In the @panel dir for the appropriate clone,
			Manually construct info page using the intended global components

		*/}
			{props.children}
		</TogglePanel>
	);
};

export default PanelLayout;
