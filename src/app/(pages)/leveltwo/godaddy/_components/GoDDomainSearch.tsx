'use client';
import { FormEvent, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { GoDaddyBaseURL } from './consts';
import { SafeExternalLink } from '@/components/global/Commons';

const sharedID = 'GoDDomainSearch';

const GoDDomainSearch = () => {
	const [query, setQuery] = useState('');
	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		const params = new URLSearchParams({ domainToCheck: query });
		window.location.href = GoDaddyBaseURL(
			'domainsearch/find?' + params.toString(),
		);
	};
	return (
		<section className='flex justify-center items-center p-8 gap-8'>
			<h2 className='sr-only'>Search for domains</h2>
			<form
				onSubmit={submitHandler}
				className='flex items-center w-full drop-shadow-md'>
				<label
					htmlFor={sharedID}
					className='block grow'>
					<span className='sr-only'>Type the domain you want</span>
					<input
						type='text'
						id={sharedID}
						name={sharedID}
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder='Type the domain you want'
						required
						pattern='\w+\.[a-zA-Z]+'
						autoComplete='off'
						className='block p-4 w-full -outline-offset-1 outline-black rounded-l-lg focus-visible:outline'
					/>
				</label>
				<button
					type='submit'
					className='flex items-center justify-center p-4 bg-teal-700 text-neutral-50 rounded-r-lg -outline-offset-2 outline-black focus-visible:outline-2'>
					<span className='sr-only'>Check availability</span>
					<IoSearch
						aria-hidden
						className='text-2xl'
					/>
				</button>
			</form>
			<SafeExternalLink
				href={GoDaddyBaseURL('tlds/shop-domain')}
				className='hidden lg:flex gap-4 items-center bg-neutral-100 p-4 rounded-lg'>
				<div className='shrink-0'>
					<span>.shop</span>
				</div>
				<div className='flex flex-col gap-2'>
					<span className='font-bold'>$1.49* / 1st year</span>
					<span>Satisfy the world&apos;s buyers with .shop</span>
				</div>
			</SafeExternalLink>
		</section>
	);
};

export default GoDDomainSearch;
