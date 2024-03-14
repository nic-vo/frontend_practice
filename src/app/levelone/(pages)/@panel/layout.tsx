'use client';

import { TogglePanel } from '@/components/global';

import { PropsWithChildren } from 'react';

const LevelOnePanelLayout = (props: PropsWithChildren) => {
	return (
		<TogglePanel>
			{/*

			In the @panel

		*/}
			{props.children}
		</TogglePanel>
	);
};

export default TogglePanel;
