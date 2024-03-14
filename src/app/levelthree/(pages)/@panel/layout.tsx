'use client';

import { TogglePanel } from '@/components/global';

import { PropsWithChildren } from 'react';

const LevelThreePanelLayout = (props: PropsWithChildren) => {
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

export default LevelThreePanelLayout;
