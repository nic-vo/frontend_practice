'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	createContext,
	Dispatch,
	FocusEventHandler,
	PropsWithChildren,
	SetStateAction,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { IoClose, IoHome, IoInformation, IoList } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

export const ToggleContext = createContext<{
	toggled: boolean;
	setToggled: Dispatch<SetStateAction<boolean>>;
}>({ toggled: false, setToggled: () => {} });

const ToggleContextProvider = ({ children }: PropsWithChildren) => {
	const [toggled, setToggled] = useState(false);
	return (
		<ToggleContext.Provider value={{ toggled, setToggled }}>
			{children}
		</ToggleContext.Provider>
	);
};

const MainPanelNav = () => {
	const segment = usePathname().split('/')[1];
	const linkRef = useRef<HTMLAnchorElement>(null);
	const { toggled, setToggled } = useContext(ToggleContext);

	const blurHandler: FocusEventHandler<HTMLAnchorElement> = useCallback(
		(e) => {
			if (!linkRef.current || e.relatedTarget === linkRef.current) return;
			setToggled(false);
		},
		[setToggled],
	);

	return (
		<nav>
			<ul>
				<li>
					<Link
						href='/'
						tabIndex={toggled ? 0 : -1}
						aria-hidden={!toggled}
						ref={linkRef}>
						Return home
					</Link>
				</li>
				<li>
					<Link
						href={'/' + segment}
						tabIndex={toggled ? 0 : -1}
						aria-hidden={!toggled}
						onBlur={blurHandler}>
						Return to index
					</Link>
				</li>
			</ul>
		</nav>
	);
};

const PanelAside = ({ children }: PropsWithChildren) => {
	const segments = usePathname().split('/').slice(1);
	const { toggled, setToggled } = useContext(ToggleContext);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [first, setFirst] = useState(true);

	useEffect(() => setFirst(false), []);

	useEffect(() => {
		if (first || toggled || !buttonRef.current) return;
		buttonRef.current.focus();
	}, [toggled]);

	if (segments.length < 3) return null;
	return (
		<aside
			className={twMerge([
				'fixed h-lvh sm:h-max w-lvw sm:w-min sm:max-w-96',
				toggled ? 'translate-x-0' : 'translate-x-full',
			])}
			aria-hidden={!toggled}
			id='info-panel'>
			<menu
				className={twMerge([
					'absolute bottom-4 -translate-x-[calc(100%+1rem)]',
					toggled ? 'hidden sm:block' : 'block',
				])}>
				<ul>
					<li>
						<Link href='/'>
							<IoHome aria-hidden />
							<span className='sr-only'>Return home</span>
						</Link>
					</li>
					<li>
						<Link href={'/' + segments[1]}>
							<IoList aria-hidden />
							<span className='sr-only'>Return to index</span>
						</Link>
					</li>
					<li>
						<button
							onClick={() => setToggled((prev) => !prev)}
							aria-expanded={toggled}
							aria-controls='info-panel'
							ref={buttonRef}>
							<IoInformation aria-hidden />
							<span className='sr-only'>Toggle info panel</span>
						</button>
					</li>
				</ul>
			</menu>
			{children}
			<button
				onClick={() => setToggled(false)}
				tabIndex={toggled ? 0 : -1}>
				<IoClose aria-hidden />
				<span className='sr-only'>Close info panel</span>
			</button>
			<MainPanelNav />
		</aside>
	);
};

const MainPanelComponent = ({ children }: PropsWithChildren) => (
	<ToggleContextProvider>
		<PanelAside>{children}</PanelAside>
	</ToggleContextProvider>
);
