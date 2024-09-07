import {
	InfoTitle,
	LayoutNav,
	OriginalNav,
	PanelContentWrapper,
	PanelNavList,
} from '@/components/panel';

const AbstractPanel = () => {
	return (
		<>
			<InfoTitle title='Abstract Help Page Clone' />
			<PanelContentWrapper>
				<p>
					This was also a quick &apos;n easy clone to pull off. No crazy
					JavaScript. Getting better at finding the sweet spot of abstraction in
					terms of components, too.
				</p>
				<p>
					The original footer layout is really weird, though. I took a few
					liberties in terms of breakpoints and flexbox to keep it sane and
					neat.
				</p>
			</PanelContentWrapper>
			<PanelNavList>
				<OriginalNav original='https://help.abstract.com/hc/en-us' />
				<LayoutNav upOne='/levelone/' />
			</PanelNavList>
		</>
	);
};

export default AbstractPanel;
