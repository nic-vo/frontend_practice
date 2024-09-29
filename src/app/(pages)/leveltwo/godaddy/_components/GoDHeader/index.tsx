import { SiGodaddy } from 'react-icons/si';
import MainCategoryNav from './MainCategoryNav';
import GoDSearchDialog from './SearchDialog';

const GoDHeader = () => (
	<header className='flex gap-4 items-center bg-neutral-800 text-neutral-50 lg:p-2 justify-between'>
		<h1 className='sr-only'>GoDaddy Primary Navigation</h1>
		<MainCategoryNav />
		<SiGodaddy
			aria-hidden
			className='lg:hidden text-3xl z-0'
		/>
		<div className='ml-auto'>
			<GoDSearchDialog />
		</div>
	</header>
);

export default GoDHeader;
