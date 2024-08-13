import { Outfit, Work_Sans } from 'next/font/google';

const defaultOptions = {
	preload: false,
	fallback: ['ui-sans-serif', 'sans-serif', 'system-ui'],
};

export const outfit = Outfit({
	weight: 'variable',
	subsets: ['latin', 'latin-ext'],
	...defaultOptions,
});

export const worksans = Work_Sans({
	weight: 'variable',
	subsets: ['latin', 'latin-ext'],
	...defaultOptions,
});
