'use client';

import { LayoutNav, TogglePanel } from '@/components/panel';

const LevelThreePanelDefault = () => {
	return (
		<TogglePanel>
			<p>
				Looks like the info panel for this clone hasn&apos;t been created yet.
			</p>
			<nav>
				<ul>
					<LayoutNav upOne='/levelthree' />
				</ul>
			</nav>
		</TogglePanel>
	);
};

export default LevelThreePanelDefault;