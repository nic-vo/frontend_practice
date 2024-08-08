import { CgAbstract } from 'react-icons/cg';
import { IoSearch } from 'react-icons/io5';

const AbstractHeader = () => {
	return (
		<header className='flex justify-between bg-black text-white text-2xl p-6 px-16'>
			<h1 className='flex gap-2'>
				<div className='aspect-square flex flex-col justify-center text-3xl bg-white text-black rounded-xl'>
					<CgAbstract />
				</div>
				<span className='w-min text-nowrap'>Abstract | Help Center</span>
			</h1>
			<div>
				<ul>
					<li>
						<button>
							<IoSearch />
						</button>
					</li>
					<li>
						<button></button>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default AbstractHeader;
