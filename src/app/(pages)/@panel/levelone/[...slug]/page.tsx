import { LayoutNav } from '@/app/(pages)/@panel/_components';

const LevelOnePanelDefault = () => {
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

export default LevelOnePanelDefault;
