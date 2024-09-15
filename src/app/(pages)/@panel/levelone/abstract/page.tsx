import {
	PanelContentLink,
	PanelContentTitle,
	PanelContentWrapper,
} from '../../_components/ForContent';

const AbstractPanel = () => {
	return (
		<PanelContentWrapper>
			<PanelContentTitle>Abstract Help Page Clone</PanelContentTitle>
			<p>
				This was also a quick &apos;n easy clone to pull off. No crazy
				JavaScript. Getting better at finding the sweet spot of abstraction in
				terms of components, too.
			</p>
			<p>
				The original footer layout is really weird, though. I took a few
				liberties in terms of breakpoints and flexbox to keep it sane and neat.
			</p>
			<PanelContentLink href='https://help.abstract.com/hc/en-us'>
				Original
			</PanelContentLink>
		</PanelContentWrapper>
	);
};

export default AbstractPanel;
