import { twMerge } from 'tailwind-merge';

export const GoDHeaderStyler = (classes: string[]) =>
	twMerge([
		'*:block w-max flex gap-2 items-center p-2 *:transition-all rounded-lg focus-visible:outline outline-neutral-950 lg:outline-emerald-400 transition-all group hover:bg-neutral-200',
		...classes,
	]);
