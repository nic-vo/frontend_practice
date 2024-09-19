'use client';

import { createContext, useEffect, useState } from 'react';
import type {
	Context,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
} from 'react';

export type ToggleMenuContextType = Context<{
	toggled: boolean;
	setToggled: Dispatch<SetStateAction<boolean>>;
}>;

const noop: Dispatch<SetStateAction<boolean>> = () => {};

export const createToggleMenuContext = () =>
	createContext({ toggled: false, setToggled: noop });

export const ToggleMenuContextProvider = ({
	children,
	breakpoint,
	ContextToProvide,
}: PropsWithChildren & {
	breakpoint: number;
	ContextToProvide: ToggleMenuContextType;
}) => {
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
		<ContextToProvide.Provider value={{ toggled, setToggled }}>
			{children}
		</ContextToProvide.Provider>
	);
};
