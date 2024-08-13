import { Outfit, Karla } from 'next/font/google';

const defaultOptions = {
	preload: false,
	fallback: ['ui-sans-serif', 'sans-serif', 'system-ui'],
};

export const outfit = Outfit({
	weight: 'variable',
	subsets: ['latin', 'latin-ext'],
	preload: false,
	fallback: ['ui-sans-serif', 'sans-serif', 'system-ui'],
});

export const karla = Karla({
	weight: 'variable',
	subsets: ['latin', 'latin-ext'],
	preload: false,
	fallback: ['ui-sans-serif', 'sans-serif', 'system-ui'],
});
