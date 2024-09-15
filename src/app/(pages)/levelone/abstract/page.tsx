import { publicsans } from '@/styles/fonts';
import {
	AbstractFooter,
	AbstractHeader,
	AbstractHeroSearch,
	AbstractGrid,
} from './_components_';

const AbstractHomepage = () => {
	return (
		<div className={publicsans.className}>
			<AbstractHeader />
			<main className='flex flex-col items-center'>
				<div className='flex flex-col items-center py-32 bg-indigo-100 gap-8 w-full'>
					<h1 className='text-3xl sm:text-6xl font-medium'>How can we help?</h1>
					<AbstractHeroSearch />
				</div>
				<AbstractGrid />
			</main>
			<AbstractFooter />
		</div>
	);
};

export default AbstractHomepage;

export const metadata = {
	title: 'Abstract Clone',
};
