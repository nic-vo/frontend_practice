'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
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

	return (
		<menu>
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
						aria-hidden={!toggled}>
						Return to index
					</Link>
				</li>
				<li>
					<button
						onClick={() => setToggled(false)}
						aria-hidden={!toggled}
						tabIndex={toggled ? 0 : -1}>
						Close info panel
					</button>
				</li>
			</ul>
		</menu>
	);
};

const MainPanelNavClasser =
	'block text-xl bg-black text-white p-2 rounded-full origin-right hover:scale-110 transition-all hover:bg-rose-700 focus-visible:bg-rose-700 focus-visible:outline outline-rose-700 outline-offset-2';

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

	if (segments.length < 2) return null;
	return (
		<aside
			className={twMerge([
				'top-0 right-0 fixed z-20 h-lvh sm:h-max w-lvw sm:max-w-lg transition-all p-6 bg-black text-white',
				toggled ? 'translate-x-0' : 'translate-x-full',
			])}
			aria-hidden={!toggled}
			id='info-panel'>
			<menu
				className={twMerge([
					'absolute top-4 left-0 -translate-x-full p-2',
					toggled ? 'hidden sm:block' : 'block',
				])}>
				<ul className='flex flex-col gap-4 *:block'>
					<li>
						<Link
							href='/'
							className={MainPanelNavClasser}>
							<IoHome aria-hidden />
							<span className='sr-only'>Return home</span>
						</Link>
					</li>
					<li>
						<Link
							href={'/' + segments[0]}
							className={MainPanelNavClasser}>
							<IoList aria-hidden />
							<span className='sr-only'>Return to index</span>
						</Link>
					</li>
					<li>
						<button
							onClick={() => setToggled((prev) => !prev)}
							aria-expanded={toggled}
							aria-controls='info-panel'
							ref={buttonRef}
							className={MainPanelNavClasser}>
							<IoInformation aria-hidden />
							<span className='sr-only'>Toggle info panel</span>
						</button>
					</li>
				</ul>
			</menu>
			{children}
			<button
				onClick={() => setToggled(false)}
				tabIndex={toggled ? 0 : -1}
				className='absolute top-2 right-2 p-1 border-2 border-white rounded-full hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black transition-all outline-none'>
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

export default MainPanelComponent;
