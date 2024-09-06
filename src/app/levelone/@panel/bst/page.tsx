import { InfoTitle, PanelContentWrapper } from '@/components/panel';

const BSTPanel = () => (
	<>
		<InfoTitle>Backstage Talks Landing Page Clone</InfoTitle>
		<PanelContentWrapper>
			<p>
				This was an interesting clone to make. The Intersection Observer API was
				crucial, and I hope it eliminates the need for rate throttling a scroll
				event listener. I had a few challenges, however:
			</p>
			<ol>
				<li>
					Setting up the breakpoints at which the scroll behavior changes seems
					a little fragile because it involves setting a magic number that
					aligns with Tailwinds breakpoints across multiple files. Perhaps
					there&apos;s a better way to do this globally via a <pre>const</pre>{' '}
					somewhere.
				</li>
				<li>
					Because the scroll behavior messes with the history API, the behavior
					when moving between screen sizes can get a little weird with reseting
					the scroll position and the like.
				</li>
			</ol>
			<p>All in all, I&apos;m happy with how this one turned out.</p>
		</PanelContentWrapper>
	</>
);

export default BSTPanel;
