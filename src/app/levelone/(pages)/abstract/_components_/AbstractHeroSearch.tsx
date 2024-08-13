'use client';

import { IoArrowForward } from 'react-icons/io5';
import useAbstractSearch from './_hooks';

const AbstractHeroSearch = () => {
	const { submitHandler, query, setQuery } = useAbstractSearch();

	return (
		<form
			onSubmit={submitHandler}
			className='flex bg-white rounded-lg w-11/12 max-w-screen-sm gap-4 p-2 shadow-lg'>
			<label
				htmlFor='hero-search'
				className='grow'>
				<span className='sr-only'>
					Enter a search query for our help database
				</span>
				<input
					id='hero-search'
					type='search'
					placeholder='Search'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className='border border-transparent p-2 rounded-md text-black placeholder:text-black outline-none h-max w-full text-xl'
				/>
			</label>
			<button
				type='submit'
				className='aspect-square shrink-0 rounded-full focus-visible:outline outline-black hover:text-indigo-500 transition-all flex justify-center items-center'>
				<IoArrowForward
					aria-hidden
					className='block text-3xl'
				/>
				<span className='sr-only'>Search our documentation</span>
			</button>
		</form>
	);
};

export default AbstractHeroSearch;
