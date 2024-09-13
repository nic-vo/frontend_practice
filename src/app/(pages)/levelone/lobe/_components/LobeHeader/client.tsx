'use client';

import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState,
} from 'react';

const VisibleContext = createContext<{
	visible: boolean;
	setVisible: Dispatch<SetStateAction<boolean>>;
}>({ visible: false, setVisible: () => {} });

const VisibleContextProvider = ({ children }: PropsWithChildren) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', (e) => {
			if (!e.view || e.view.screenX) return;
			if (e.view.screenX) return;
		});
	}, []);

	return (
		<VisibleContext.Provider value={{ visible, setVisible }}>
			{children}
		</VisibleContext.Provider>
	);
};

export const LobeToggleMenu = () => null;
