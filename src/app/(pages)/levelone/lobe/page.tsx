import { LobeHeader, LobeModal, LobeFooter } from './_components';
import LobeDLButton from './_components/LobeDLButton';

const LobeHomepage = () => {
	return (
		<main className='flex flex-col gap-16 items-center pt-32 text-slate-700'>
			<LobeHeader />
			<hgroup className='flex flex-col gap-4 w-full items-center'>
				<h1 className='font-bold text-4xl md:text-7xl text-center'>
					<span>Lobe</span> <span className='text-teal-400'>Tour</span>
				</h1>
				<p className='text-center font-medium text-lg md:text-2xl w-2/3 md:w-1/2 max-w-prose'>
					Build your first machine learning model in ten minutes. No code or
					experience required.
				</p>
			</hgroup>
			<LobeModal />
			<section className='flex flex-col items-center gap-8 md:py-8'>
				<h2 className='text-4xl md:text-6xl font-bold w-2/3 text-center'>
					Train your app with Lobe
				</h2>
				<LobeDLButton
					reachable
					className='p-2 px-8 bg-teal-400 text-white font-bold rounded-3xl text-lg'
				/>
			</section>
			<LobeFooter />
		</main>
	);
};

export default LobeHomepage;

export const metadata = {
	title: 'Lobe Clone',
};
