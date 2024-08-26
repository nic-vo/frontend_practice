'use client';

import { BSTBgColors } from './Content';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren, useEffect, useState } from 'react';

const parsePathHash = (pathname: string) => {
	const hash = pathname.split('#')[1];
	if (!hash) return 0;

	const popped = hash.split('').pop();
	const issue = popped ? parseInt(popped) : BSTBgColors.length;
	return BSTBgColors.length - issue;
};

const BSTMain = ({ children }: PropsWithChildren) => {
	const [issue, setIssue] = useState(0);

	useEffect(() => {
		const handler = (e: HashChangeEvent) => {
			console.log(e.newURL);
			setIssue(parsePathHash(e.newURL));
		};
		window.addEventListener('hashchange', handler);
		return () => window.removeEventListener('hashchange', handler);
	}, [issue, setIssue]);

	return (
		<main
			className={twMerge([
				BSTBgColors[issue] ?? 'bg-white',
				'h-lvh transition-all',
			])}>
			{children}
		</main>
	);
};

export default BSTMain;
