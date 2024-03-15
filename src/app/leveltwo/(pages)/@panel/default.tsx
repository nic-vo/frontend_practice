import { LayoutNav } from '@/components/panel';

const LevelTwoPanelDefault = () => {
	return (
		<>
			<p>
				Looks like the info panel for this clone hasn&apos;t been created yet.
			</p>
			<nav>
				<ul>
					<LayoutNav upOne='/leveltwo' />
				</ul>
			</nav>
		</>
	);
};

export default LevelTwoPanelDefault;
