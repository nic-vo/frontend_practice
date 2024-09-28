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
import {
	IoClose,
	IoGlobeOutline,
	IoHelpCircleOutline,
	IoSearch,
} from 'react-icons/io5';
import { SafeExternalLink } from '@/components/global/Commons';
import { GoDaddyBaseURL } from '../../consts';
import { SiGodaddy } from 'react-icons/si';

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
			onClick={() => setToggled((prev) => !prev)}>
			<IoSearch
				aria-hidden
				className='lg:hidden'
			/>
			<span className='sr-only lg:not-sr-only'></span>
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

export const GoDSearchDialog = () => {
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
			id={sharedAriaID}>
			<div>
				<h2 className='sr-only'>Search GoDaddy</h2>
				<button
					className='absolute top-2 right-2'
					onClick={() => setToggled(false)}>
					<IoClose aria-hidden />
					<span className='sr-only'>Close the search dialog</span>
				</button>
				<form>
					<label htmlFor='GoD-search'>
						<span>Search for a GoDaddy product</span>
						<input
							type='text'
							id='GoD-search'
						/>
					</label>
				</form>
				<nav>
					<section>
						<h3>POPULAR SEARCH TERMS</h3>
						<ul>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</section>
					<section>
						<h3>QUICK LINKS</h3>
						<ul>
							<li>
								<SafeExternalLink href={GoDaddyBaseURL('domains')}>
									<IoGlobeOutline aria-hidden />
									<span>Domain Search</span>
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href={GoDaddyBaseURL('help?src=site_search')}>
									<IoHelpCircleOutline aria-hidden />
									<span>Help Center</span>
								</SafeExternalLink>
							</li>
							<li>
								<span>Plans &amp; pricing</span>
							</li>
							<li>
								<span>Account - My Products</span>
							</li>
							<li>
								<span>Hire an Expert</span>
							</li>
						</ul>
					</section>
				</nav>
			</div>
		</dialog>
	);
};
