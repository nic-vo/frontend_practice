'use client';

import { useEffect, useRef } from 'react';

import anim from './OHAnim.module.scss';

export const useOneTimeFade = <T extends HTMLElement>() => {
	const ref = useRef<T | null>(null);
	useEffect(() => {
		const element = ref.current;
		if (!element) return;
		const observer = new IntersectionObserver(
			(entries) => {
				for (const element of entries) {
					if (!element.isIntersecting) continue;
					element.target.classList.add(anim.onefadein);
					observer.unobserve(element.target);
				}
			},
			{ threshold: 0.1 },
		);
		for (const child of element.children) {
			if (child.tagName === 'HEADER' || child.tagName === 'FOOTER') continue;
			observer.observe(child);
		}
		return () => {
			if (!element) return;
			for (const child of element.children) observer.unobserve(child);
		};
	}, []);

	return ref;
};
