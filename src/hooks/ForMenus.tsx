'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

export const ToggleMenuContext = createContext<{
	toggled: boolean;
	setToggled: Dispatch<SetStateAction<boolean>>;
}>({ toggled: false, setToggled: () => {} });

export const ToggleMenuContextProvider = ({
	children,
	breakpoint,
}: PropsWithChildren & { breakpoint: number }) => {
	const [toggled, setToggled] = useState(false);

	useEffect(() => {
		const handler = (e: UIEvent) => {
			if (!e.view) return;
			if (e.view.screenX > breakpoint) {
				setToggled(true);
			} else {
				setToggled(false);
			}
		};
		window.addEventListener('resize', handler);
		return () => window.removeEventListener('resize', handler);
	}, []);

	return (
		<ToggleMenuContext.Provider value={{ toggled, setToggled }}>
			{children}
		</ToggleMenuContext.Provider>
	);
};

export const useMenuToggle = () => {
	return useContext(ToggleMenuContext);
};
