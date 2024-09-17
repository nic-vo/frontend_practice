import { InlineCode } from '@/components/global/Commons';
import {
	PanelContentLink,
	PanelContentTitle,
	PanelContentWrapper,
} from '../../_components/ForContent';

const OHStudioPanel = () => (
	<PanelContentWrapper>
		<PanelContentTitle>OH.STUDIO Project Page Clone</PanelContentTitle>
		<p>This was a pretty interesting clone to make.</p>
		<p>
			Layout-wise, this was a simple page. The main issue I had was with
			creating the simple fade-in animations because, in order to do them
			efficiently and without a lot of DOM bloat, I had to throw in an ungodly
			mix of imperative JS with React&apos;s typical declarative stuff.
		</p>
		<p>
			I created a custom hook to go on the parent container of any nodes to
			which I wanted to apply the fade-in animation. This would access the
			parent node's children via a ref accessed in a useEffect, set an
			Intersection Observer to observe each of them, and add an{' '}
			<InlineCode>.scss</InlineCode> class with the animation once the threshold
			callback triggered for each observed element. This would not work if any
			element was part of a React component that re-renders, but luckily, this
			page was fairly static besides some layered CSS.
		</p>
		<PanelContentLink href='https://oh.studio'>Original</PanelContentLink>
	</PanelContentWrapper>
);

export default OHStudioPanel;
