import { SiGodaddy } from 'react-icons/si';
import MainCategoryNav from './MainCategoryNav';
import GoDSearchDialog from './SearchDialog';
import { SafeExternalLink } from '@/components/global/Commons';
import { IoCartOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { GoDHeaderStyler } from './styling';
import { GoDaddyBaseURL } from '../consts';
import GoDHeaderLogin from './GoDHeaderLogin';

const GoDHeader = () => (
	<header className='flex gap-4 items-center bg-neutral-800 text-neutral-50 lg:p-2 justify-between'>
		<h1 className='sr-only'>GoDaddy Primary Navigation</h1>
		<MainCategoryNav />
		<SiGodaddy
			aria-hidden
			className='lg:hidden text-3xl z-0'
		/>
		<div className='ml-auto flex gap-2 items-center'>
			<GoDSearchDialog />
			<SafeExternalLink
				href={GoDaddyBaseURL('help')}
				className={GoDHeaderStyler([
					'hover:bg-neutral-600 hover:text-neutral-50 focus-visible:outline outline-emerald-400',
				])}>
				<IoHelpCircleOutline
					aria-hidden
					className='text-2xl lg:hidden'
				/>
				<span className='sr-only lg:not-sr-only'>Help</span>
			</SafeExternalLink>
			<GoDHeaderLogin />
			<SafeExternalLink
				href='https://cart.godaddy.com'
				className={GoDHeaderStyler([
					'hover:bg-neutral-600 hover:text-neutral-50 focus-visible:outline outline-emerald-400',
				])}>
				<IoCartOutline
					aria-hidden
					className='text-2xl'
				/>
				<span className='sr-only'>Go to your cart</span>
			</SafeExternalLink>
		</div>
	</header>
);

export default GoDHeader;
