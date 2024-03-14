import LevelOneLayoutNav from '../_components_';
import {
	InfoTitle,
	OriginalNav,
	PanelContentWrapper,
	PanelNavWrapper,
} from '@/components/global';

const AbletonInfo = () => {
	return (
		<>
			<InfoTitle title='Ableton About Page Clone' />
			<PanelContentWrapper>
				<p>
					This was a quick &apos;n easy clone to pull off. No crazy JavaScript.
					It was my first foray into Tailwind; Tailwind&apos;s so strong,
					separation of concerns aside.
				</p>
				<p>
					I did have to use some of the &ldquo;arbitrary value&rdquo; syntax
					that Tailwind provides, but honestly, the default classes drive 98% of
					the look. I also had to write some custom CSS that actually may not be
					necessary because I haven&apos;t really looked into Tailwind syntax
					for highly detailed selectors yet, so we&apos;ll see.
				</p>
				<p>
					I also took the opportunity to attempt to learn more about
					Next.js&apos;s App router here. This info panel is actually a parallel
					route to the actual clone. And it has hook functionality, so I hope
					the way I made it keeps the client functionality at the leaves of the
					tree.
				</p>
			</PanelContentWrapper>
			<PanelNavWrapper>
				<OriginalNav original='https://www.ableton.com/en/about' />
				<LevelOneLayoutNav />
			</PanelNavWrapper>
		</>
	);
};

export default AbletonInfo;
