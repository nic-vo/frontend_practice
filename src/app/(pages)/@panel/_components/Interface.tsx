'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import { IoHome, IoInformation, IoList } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

const ToggleContext = createContext<{
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

export const PanelOriginalLink = ({
	children,
	href,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<a
		href={href}
		target='_blank'
		referrerPolicy='no-referrer'>
		{children}
	</a>
);

const MainPanelNav = () => {
	const segments = usePathname().split('/').slice(1);
	const { toggled } = useContext(ToggleContext);
	return (
		<nav>
			<ul>
				<li>
					<Link
						href='/'
						tabIndex={toggled ? 0 : -1}>
						Return home
					</Link>
				</li>
				<li>
					<Link
						href={segments[0]}
						tabIndex={toggled ? 0 : -1}>
						Return to index
					</Link>
				</li>
			</ul>
		</nav>
	);
};

const MainPanel = ({ children }: PropsWithChildren) => {
	const segments = usePathname().split('/').slice(1);
	const { toggled, setToggled } = useContext(ToggleContext);
	return (
		<aside
			className={twMerge([
				'fixed md:right-0 md:h-lvh',
				toggled ? 'translate-x-0' : 'translate-x-full',
			])}>
			<menu className='absolute bottom-4 -translate-x-[calc(100%+1rem)]'>
				<ul>
					<li>
						<Link href='/'>
							<IoHome aria-hidden />
							<span className='sr-only'>Return home</span>
						</Link>
					</li>
					<li>
						<Link href={segments[0]}>
							<IoList aria-hidden />
							<span className='sr-only'>Return to index</span>
						</Link>
					</li>
					<li>
						<button onClick={() => setToggled((prev) => !prev)}>
							<IoInformation aria-hidden />
							<span className='sr-only'>Toggle info panel</span>
						</button>
					</li>
				</ul>
			</menu>
			{children}
			<MainPanelNav />
		</aside>
	);
};
