import Link from 'next/link';
import { getPages } from '@/lib/pages';

const segment = 'levelthree';

const LevelThreeIndex = async () => {
	const pages = await getPages(['app', segment, '(pages)']);

	return (
		<main>
			<h1>Level Three Clones</h1>
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
							<li key='link'>
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

export default LevelThreeIndex;

export const metadata = {
	title: 'Nicolas Vo | Level Three Clones',
};
