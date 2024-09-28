import { Oswald, Outfit, Public_Sans, DM_Sans, Inter } from 'next/font/google';

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

export const publicsans = Public_Sans({
	weight: 'variable',
	subsets: ['latin', 'latin-ext'],
	preload: false,
	fallback: ['ui-sans-serif', 'sans-serif', 'system-ui'],
});

export const oswald = Oswald({
	weight: 'variable',
	subsets: ['latin'],
	preload: false,
	fallback: ['ui-sans-serif', 'sans-serif', 'system-ui'],
});

export const dmsans = DM_Sans({
	weight: 'variable',
	style: 'normal',
	subsets: ['latin'],
	preload: false,
	fallback: ['ui-sans-serif', 'sans-serif', 'system-ui'],
});

export const inter = Inter({
	weight: 'variable',
	preload: false,
	subsets: ['latin'],
	fallback: ['ui-sans-serif', 'sans-serif', 'system-ui'],
});
