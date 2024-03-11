'use client';

import { useEffect, useRef } from 'react';

const Cookies = () => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!dialogRef.current) return;
		const time = sessionStorage.getItem('MY_ABLETON_COOKIE_TIMEOUT');
		try {
			if (time === null) throw new Error();
			if (Date.now() > parseInt(time)) throw new Error();
		} catch {
			dialogRef.current.show();
		}
		return;
	}, []);

	return (
		<dialog
			ref={dialogRef}
			className='w-full fixed lg:max-w-lg text-white text-base lg:text-xl bg-black p-4 bottom-0 lg:left-12 lg:bottom-12 z-10'>
			<form
				method='dialog'
				className='grid grid-cols-2 gap-3'>
				<p className='col-span-2 text-xs lg:text-sm'>
					Clicking “Accept” means you consent to your data being processed in
					the United States, and you&apos;ll let us use cookies and other
					technologies to process your personal information so we can
					personalize and enhance your experience using Ableton.com. This also
					allows us to get statistics of visits. Click “More Info” to find out
					more about this (including possible risks of data processing in the
					USA), set your individual settings or object to certain processes.
					Click “Close” to deny consent. However, the use of technically
					required cookies is essential for the website to function.
				</p>
				<button
					type='submit'
					className='col-span-2 bg-blue-700 p-2'>
					Accept
				</button>
				<button
					onClick={() => {
						if (dialogRef.current) dialogRef.current.close();
					}}
					className='border-2 p-2'>
					Close
				</button>
				<a
					href='https://www.ableton.com/en/cookie-settings/?next=https://www.ableton.com/en/about/'
					className='text-center border-2 p-2'>
					More info
				</a>
			</form>
		</dialog>
	);
};

export default Cookies;
