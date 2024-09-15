import { InlineCode } from '@/components/global/Commons';
import {
	PanelContentLink,
	PanelContentTitle,
	PanelContentWrapper,
} from '../../_components/ForContent';

const LobePanel = () => (
	<PanelContentWrapper>
		<PanelContentTitle>Lobe Tour Page Clone</PanelContentTitle>
		<p>
			This was a pretty simple clone to make. I&apos;d already had some
			experience making <InlineCode>&lt;dialog&gt;</InlineCode> modals.
		</p>
		<p>
			The real issue stemmed from how the subtle, backdrop-blurred{' '}
			<InlineCode>&lt;header&gt;</InlineCode> played with how browsers determine
			implicit stacking contexts for containers.
		</p>
		<p>
			Apparently, if a parent container doesn&apos;t have an explicit stacking
			context via the <InlineCode>z-index</InlineCode> rule, if any of its
			children have a different <InlineCode>position</InlineCode> attribute,
			that&apos;ll affect the stacking context of the parent relative to its
			siblings unless the parent&apos;s stacking context is already explicitly
			set.
		</p>
		<p>
			This means that any design that requires some z-axis shenanigans can be
			thrown off if not accounted for with explicit{' '}
			<InlineCode>z-index</InlineCode> definitions. Good to know.
		</p>
		<PanelContentLink href='https://www.lobe.ai/tour'>
			Original
		</PanelContentLink>
	</PanelContentWrapper>
);

export default LobePanel;
