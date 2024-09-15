'use client';

import thumb from './Thumb.jpg';
import Image from 'next/image';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { IoClose } from 'react-icons/io5';

const LobeModalContext = createContext<{
	toggled: boolean;
	setToggled: Dispatch<SetStateAction<boolean>>;
}>({ toggled: false, setToggled: () => {} });

export const LobeModalContextProvider = ({ children }: PropsWithChildren) => {
	const [toggled, setToggled] = useState(false);

	return (
		<LobeModalContext.Provider value={{ toggled, setToggled }}>
			{children}
		</LobeModalContext.Provider>
	);
};

export const LobeModalButton = () => {
	const { toggled, setToggled } = useContext(LobeModalContext);
	const [first, setFirst] = useState(true);
	const ref = useRef<HTMLButtonElement>(null);

	useEffect(() => setFirst(false), []);

	useEffect(() => {
		if (first || !ref.current) return;
		if (!toggled) ref.current.focus();
	}, [toggled]);

	return (
		<button
			onClick={() => setToggled(true)}
			className='aspect-video max-w-screen-lg rounded-3xl overflow-hidden w-10/12 hover:scale-105 hover:drop-shadow-2xl focus-visible:outline outline-black outline-4 outline-offset-8 transition-all'
			ref={ref}>
			<Image
				src={thumb}
				alt='Open the Lobe video overview'
			/>
		</button>
	);
};

export const LobeModalDialog = ({ children }: PropsWithChildren) => {
	const { toggled, setToggled } = useContext(LobeModalContext);
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!ref.current) return;
		if (toggled) {
			ref.current.showModal();
		} else ref.current.close();
	}, [toggled]);

	return (
		<dialog
			ref={ref}
			className='h-screen w-screen backdrop-blur-xl backdrop-brightness-50 bg-transparent'>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setToggled(false);
				}}
				className='flex justify-center items-center first:*:block h-full'>
				{children}
				<button
					type='submit'
					className='absolute block top-4 right-4 p-2 text-xl text-white focus-visible:outline outline-teal-400 rounded-full hover:bg-teal-400 transition-all'>
					<IoClose aria-hidden />
					<span className='sr-only'>Close video</span>
				</button>
			</form>
		</dialog>
	);
};
