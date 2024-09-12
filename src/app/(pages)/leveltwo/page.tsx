import Link from 'next/link';
import { getPages } from '@/lib/pages';

const segment = 'leveltwo';

const LevelTwoIndex = async () => {
	const pages = await getPages(['app', '(pages)', segment]);

	return (
		<main>
			<h1>Level Two Clones</h1>
			{pages.length === 0 ? (
				<p>Nothing here!</p>
			) : (
				<nav>
					<ul>
						{pages.map((link) => (
							<li key={link}>
								<Link href={`/${segment}/${link}`}>{link}</Link>
							</li>
						))}
						<li>
							<Link href='/'>Home</Link>
						</li>
					</ul>
				</nav>
			)}
		</main>
	);
};

export default LevelTwoIndex;

export const metadata = {
	title: 'Level Two Clones',
};
