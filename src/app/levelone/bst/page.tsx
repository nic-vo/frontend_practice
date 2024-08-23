import { BSTScrollProvider } from './_components/BSTScroll';

const BSTHomepage = () => {
	return (
		<BSTScrollProvider>
			<main className='h-[500vh]'>
				<h1>Backstage Talks Clone</h1>
				<section>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
					reprehenderit, ipsum maxime odio tenetur animi tempora neque optio
					expedita saepe repellendus iure, nobis laboriosam ipsa, doloribus
					aliquid nostrum repellat consectetur!
				</section>
			</main>
		</BSTScrollProvider>
	);
};

export default BSTHomepage;

export const metadata = {
	title: 'Backstage Talks Clone',
};
