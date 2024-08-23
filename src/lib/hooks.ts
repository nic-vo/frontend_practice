'use client';

import { useState } from 'react';

export const useThrottle = (waitSeconds: number) => {
	const [ready, setReady] = useState(true);
	const [throttle, setThrottle] = useState<null | NodeJS.Timeout>(null);

	const triggerThrottle = () => {
		if (!ready || throttle) return;
		setReady(false);
		setThrottle(
			setTimeout(() => {
				console.log('release throttle');
				setReady(true);
				setThrottle(null);
			}, waitSeconds * 1000),
		);
	};

	return { ready, triggerThrottle };
};
