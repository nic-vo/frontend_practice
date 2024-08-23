import Link from 'next/link';
import { getPages } from '@/lib/pages';

const segment = 'leveltwo';

const LevelTwoIndex = async () => {
	const pages = await getPages(['app', segment]);

	return (
		<main>
			<h1>Level Two Clones</h1>
			<section>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
				deleniti quaerat impedit perspiciatis at quod amet laboriosam
				voluptatibus omnis eius fugit quia rem tenetur, atque nihil doloremque
				necessitatibus repellat. Nisi.
			</section>
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
