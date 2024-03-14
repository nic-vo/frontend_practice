'use client';

import { TogglePanel } from '@/components/global';
import LevelThreeLayoutNav from './_components_';

const LevelThreePanelLayoutDefault = () => {
	return (
		<TogglePanel>
			<p>The info panel for this clone is missing!</p>
			<nav>
				<ul>
					<LevelThreeLayoutNav />
				</ul>
			</nav>
		</TogglePanel>
	);
};

export default LevelThreePanelLayoutDefault;
