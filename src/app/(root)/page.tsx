import Link from 'next/link';
import { getPages } from '@/lib/pages';

export default async function HomePage() {

	// TODO: Fetch all files in (pages); string[] of links

	const links: string[] = await getPages(['(pages)']);
	console.log(links)
	return (
		<main>
			<h1 className=''>Welcome to my frontend practice repo</h1>
			<section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore impedit corporis perspiciatis natus aperiam esse vitae sequi veritatis quam laudantium quas nemo sit, optio aspernatur et molestiae aut consequatur eaque!</section>
			{
				links.length === 0 ? <p>Nothing here!</p>
					:
					<nav>
						<ul>{
							links.map(link => (
								<li key={link}>
									<Link href={`/${link}`}>{link}</Link>
								</li>
							))}
						</ul>
					</nav>
			}
		</main>
	);
}

export const metadata = {
	title: 'Nic Vo | Frontend Practice'
}
