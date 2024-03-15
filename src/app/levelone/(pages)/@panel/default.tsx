'use client';

import { LayoutNav, TogglePanel } from '@/components/global';

const LevelOnePanelDefault = () => {
	return (
		<TogglePanel>
			<p>
				Looks like the info panel for this clone hasn&apos;t been created yet.
			</p>
			<nav>
				<ul>
					<LayoutNav upOne='/levelone' />
				</ul>
			</nav>
		</TogglePanel>
	);
};

export default LevelOnePanelDefault;
