'use client';

import { TogglePanel } from '@/components/global';
import LevelOneLayoutNav from './_components_';

const LevelOnePanelLayoutDefault = () => {
	return (
		<TogglePanel>
			<p>The info panel for this clone is missing!</p>
			<nav>
				<ul>
					<LevelOneLayoutNav />
				</ul>
			</nav>
		</TogglePanel>
	);
};

export default LevelOnePanelLayoutDefault;
