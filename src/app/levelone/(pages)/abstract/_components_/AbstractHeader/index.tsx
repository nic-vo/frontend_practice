import { SafeExternalLink } from '@/components/global/Commons';
import { CgAbstract } from 'react-icons/cg';
import AbstractHeaderSearch from './AbstractHeaderSearch';
import MiniMenu from './MiniMenu';

const AbstractHeader = () => {
	return (
		<header className='flex justify-between bg-black text-white text-2xl px-4 items-center'>
			<nav className='shrink-0'>
				<ul className='flex gap-2 divide-x *:block items-center'>
					<li>
						<SafeExternalLink
							href='https://www.goabstract.com'
							className='flex gap-2 hover:brightness-75 focus-visible:outline outline-2 transition-all outline-white font-semibold p-2 rounded-md'>
							<CgAbstract
								aria-hidden
								className='text-3xl bg-white text-black rounded-xl'
							/>{' '}
							Abstract
						</SafeExternalLink>
					</li>
					<li className='pl-2'>
						<SafeExternalLink
							href='https://help.abstract.com/hc/en-us'
							className='focus-visible:outline outline-2 hover:underline outline-white p-2 rounded-md'>
							Help Center
						</SafeExternalLink>
					</li>
				</ul>
			</nav>
			<AbstractHeaderSearch />
			<MiniMenu />
		</header>
	);
};

export default AbstractHeader;
