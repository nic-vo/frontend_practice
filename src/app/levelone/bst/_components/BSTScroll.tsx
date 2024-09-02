'use client';

import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { BSTContentLength } from './Content';

const BTSScrollContext = createContext<{
	screen: number;
	setScreen: Dispatch<SetStateAction<number>>;
}>({
	screen: 0,
	setScreen: () => {},
});

export default BTSScrollContext;

export const BSTScrollProvider = ({ children }: PropsWithChildren) => {
	const [screen, setScreen] = useState(0);

	useEffect(() => {
		const handler = (e: WheelEvent) => {
			if (window.innerWidth <= 640) return;
			if (e.deltaY > 0 && screen < BSTContentLength - 1) {
				window.location.hash = `#issue${BSTContentLength - screen - 1}`;
			} else if (e.deltaY < 0 && screen > 0) {
				window.location.hash = `#issue${BSTContentLength - screen + 1}`;
			}
		};
		window.addEventListener('wheel', handler);
		return () => window.removeEventListener('wheel', handler);
	}, [screen]);

	return (
		<BTSScrollContext.Provider value={{ screen, setScreen }}>
			{children}
		</BTSScrollContext.Provider>
	);
};
