'use client';

import { useThrottle } from '@/lib/hooks';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';

const BTSScrollContext = createContext(0);

export default BTSScrollContext;

export const BSTScrollProvider = ({ children }: PropsWithChildren) => {
	const [screen, setScreen] = useState(0);
	const { ready, triggerThrottle } = useThrottle(1);

	useEffect(() => {
		const windowHandler = (e: Event) => {
			if (!ready) return;

			triggerThrottle();
		};
		window.addEventListener('scroll', windowHandler);

		return () => window.removeEventListener('scroll', windowHandler);
	}, [ready, triggerThrottle]);

	return (
		<BTSScrollContext.Provider value={screen}>
			{children}
		</BTSScrollContext.Provider>
	);
};
