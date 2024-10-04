'use client';

import {
	createContext,
	Dispatch,
	FormEvent,
	PropsWithChildren,
	SetStateAction,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import { GoDaddyBaseURL } from '../../consts';
import { SiGodaddy } from 'react-icons/si';
import { GoDHeaderStyler } from '../styling';
import { twMerge } from 'tailwind-merge';

import AddtlAnims from '@/styles/globals.module.scss';

const GoDSearchToggleContext = createContext<{
	toggled: boolean;
	setToggled: Dispatch<SetStateAction<boolean>>;
}>({
	toggled: false,
	setToggled: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

export const GoDSearchToggleContextProvider = ({
	children,
}: PropsWithChildren) => {
	const [toggled, setToggled] = useState(false);

	return (
		<GoDSearchToggleContext.Provider value={{ toggled, setToggled }}>
			{children}
		</GoDSearchToggleContext.Provider>
	);
};

const sharedAriaID = 'GoD-search-dialog';

export const GoDToggleSearchButton = () => {
	const { toggled, setToggled } = useContext(GoDSearchToggleContext);

	return (
		<button
			aria-controls={sharedAriaID}
			aria-expanded={toggled}
			onClick={() => setToggled((prev) => !prev)}
			className={GoDHeaderStyler([
				'text-2xl hover:bg-neutral-600 outline-emerald-400 hover:text-neutral-50',
			])}>
			<IoSearch aria-hidden />
			<span className='sr-only'>Search GoDaddy</span>
		</button>
	);
};

export const GoDSearchForm = () => {
	const { toggled } = useContext(GoDSearchToggleContext);
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(false);

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		const params = new URLSearchParams({ q: query });
		window.location.href = GoDaddyBaseURL(
			`site-search-page?${params.toString()}`,
		);
	};

	useEffect(() => {
		if (!toggled) setQuery('');
	}, [toggled]);

	return (
		<form onSubmit={submitHandler}>
			<label tabIndex={toggled ? 0 : -1}>
				<input
					type='text'
					value={query}
					disabled={!toggled}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</label>
			<button
				type='submit'
				disabled={!toggled || loading}>
				{toggled || loading ? (
					'Search'
				) : (
					<>
						<SiGodaddy
							aria-hidden
							className='animate-pulse'
						/>
						<span className='sr-only'>Loading...</span>
					</>
				)}
			</button>
		</form>
	);
};

export const GoDSearchDialogContainer = ({ children }: PropsWithChildren) => {
	const { toggled, setToggled } = useContext(GoDSearchToggleContext);
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!ref.current) return;
		if (toggled) ref.current.showModal();
		else ref.current.close();
	}, [toggled]);

	return (
		<dialog
			ref={ref}
			id={sharedAriaID}
			className='h-screen w-screen overflow-hidden backdrop-blur-lg bg-transparent'
			onClose={() => setToggled(false)}>
			<div
				className={twMerge([
					'h-max bg-neutral-50',
					toggled ? AddtlAnims.slideInTop : AddtlAnims.slideOutTop,
				])}>
				<h2 className='sr-only'>Search GoDaddy</h2>
				<button
					className='absolute top-2 right-2 z-10'
					onClick={() => setToggled(false)}>
					<IoClose aria-hidden />
					<span className='sr-only'>Close the search dialog</span>
				</button>
				{children}
			</div>
		</dialog>
	);
};
