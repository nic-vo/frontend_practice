import Link from 'next/link';
import { getPages } from '@/lib/pages';

const segment = 'leveltwo'

export default async function LevelTwoIndex() {
	const pages = await getPages(['(pages)', segment]);

	return (
		<main>
			<h1>Level Two Clones</h1>
			<section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti quaerat impedit perspiciatis at quod amet laboriosam voluptatibus omnis eius fugit quia rem tenetur, atque nihil doloremque necessitatibus repellat. Nisi.</section>
			{
				pages.length === 0 ? <p>Nothing here!</p>
					:
					(
						<nav>
							<ul>
								{
									pages.map(link => (
										<li key='link'>
											<Link href={`/${segment}/link`}>{link}</Link>
										</li>
									))
								}
							</ul>
						</nav>
					)
			}
		</main>
	);
}

export const metadata = {
	title: 'Nic Vo | Level Two Clones'
};
