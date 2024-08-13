'use client';

import useAbstractSearch from '../_hooks';

import { useEffect, useRef, useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

const AbstractHeaderSearch = () => {
	const [toggled, setToggled] = useState(false);
	const { query, setQuery } = useAbstractSearch();
	const toggleRef = useRef<HTMLButtonElement>(null);
	const labelRef = useRef<HTMLLabelElement>(null);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		window.location.assign(
			`https://help.abstract.com/hc/en-us/search?utf8=✓&query=${encodeURIComponent(query)}`,
		);
	};

	const toggleHandler = () => setToggled(!toggled);

	useEffect(() => {
		if (toggled && labelRef.current) labelRef.current.focus();
		else if (!toggled && toggleRef.current) toggleRef.current.focus();
	}, [toggled]);

	return (
		<>
			<button
				aria-label='Toggle header search bar'
				className='block size-max lg:hidden hover:scale-125 focus-visible:outline outline-white rounded-lg transition-all p-2 outline-2'
				onClick={toggleHandler}
				disabled={toggled}
				aria-pressed={toggled}>
				<IoSearch aria-hidden />
			</button>
			<form
				onSubmit={submitHandler}
				className={twMerge(
					'absolute w-full h-full left-0 top-0 bg-white text-black lg:hidden justify-center',
					toggled ? 'flex' : 'hidden',
				)}>
				<fieldset
					disabled={!toggled}
					className='flex gap-2 items-center w-11/12 max-w-screen-lg'>
					<label
						htmlFor='header-search'
						className='grow'
						ref={labelRef}>
						<span className='sr-only'>
							Enter a search query for our help database
						</span>
						<input
							id='header-search'
							type='text'
							placeholder='Search'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							className='border border-black rounded-md p-4 text-black placeholder:text-black outline-none h-max w-full text-xl'
						/>
					</label>
					<button
						type='button'
						aria-label='Close header search bar'
						className='p-2 rounded-full focus-visible:outline outline-2 outline-black'
						onClick={toggleHandler}>
						<IoClose aria-hidden />
					</button>
				</fieldset>
			</form>
		</>
	);
};

export default AbstractHeaderSearch;
