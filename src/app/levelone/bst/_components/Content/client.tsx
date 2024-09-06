'use client';

import {
	HTMLAttributes,
	PropsWithChildren,
	useContext,
	useEffect,
	useRef,
} from 'react';
import BTSScrollContext from '../BSTScroll';

export const IssueSection = ({
	children,
	id,
	...attrs
}: PropsWithChildren &
	Omit<HTMLAttributes<HTMLElement>, 'className' | 'id'> & { id: number }) => {
	const ref = useRef<HTMLElement>(null);
	const { setScreen } = useContext(BTSScrollContext);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(
			(entities) => {
				for (const entity of entities) {
					if (!entity.isIntersecting) continue;
					setScreen(8 - id);
					if (window.innerWidth > 768) continue;
					history.pushState(
						{},
						'',
						window.location.toString().split('#')[0] + `#issue${id}`,
					);
				}
			},
			{ threshold: 0.5 },
		);
		observer.observe(ref.current);
	}, [id, setScreen]);

	return (
		<section
			ref={ref}
			id={`issue${id}`}
			{...attrs}
			className='flex flex-col justify-center items-center gap-4 h-lvh font-semibold text-lg *:text-center max-w-xs lg:max-w-md'>
			{children}
		</section>
	);
};
