import { LayoutNav, TogglePanel } from '@/app/(pages)/@panel/_components';

const PanelDefault = () => {
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

export default PanelDefault;
