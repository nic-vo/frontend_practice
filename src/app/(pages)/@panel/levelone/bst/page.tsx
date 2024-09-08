import {
	InfoTitle,
	LayoutNav,
	OriginalNav,
	PanelContentWrapper,
	PanelNavList,
} from '@/app/(pages)/@panel/_components';

const BSTPanel = () => (
	<>
		<InfoTitle>Backstage Talks Landing Page Clone</InfoTitle>
		<PanelContentWrapper>
			<p>
				This was an interesting clone to make. The Intersection Observer API was
				crucial, and I hope it eliminates the need for rate throttling a scroll
				event listener. I had a few challenges, however:
			</p>
			<ol className='flex flex-col gap-2 list-decimal pl-6'>
				<li>
					<p>
						Setting up the breakpoints at which the scroll behavior changes
						seems a little fragile because it involves setting a magic number
						that aligns with Tailwinds breakpoints across multiple files.
						Perhaps there&apos;s a better way to do this globally via a{' '}
						<pre className='inline'>const</pre> somewhere.
					</p>
				</li>
				<li>
					<p>
						Because the scroll behavior messes with the history API, the
						behavior when moving between screen sizes can get a little weird
						with reseting the scroll position and the like.
					</p>
				</li>
			</ol>
			<p>All in all, I&apos;m happy with how this one turned out.</p>
		</PanelContentWrapper>
		<PanelNavList>
			<OriginalNav original='https://backstagetalks.com/' />
			<LayoutNav upOne='/levelone/' />
		</PanelNavList>
	</>
);

export default BSTPanel;
