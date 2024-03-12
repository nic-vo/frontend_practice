'use client';

import { PropsWithChildren, useState } from 'react';

const ToggleAside = (props: PropsWithChildren) => {
	const [toggled, setToggled] = useState(true);

	return (
		<aside
			className={`fixed bottom-0 lg:bottom-2 lg:right-2 flex flex-col gap-2 p-4 bg-black text-white rounded-lg w-full h-full lg:max-w-[33svw] max-h-[33svh] overflow-hidden z-10 transition-transform ${toggled ? 'translate-x-[110%]' : ''}`}>
			{props.children}
			<button
				className='absolute -translate-x-full'
				onClick={() => setToggled(!toggled)}>
				Toggle
			</button>
		</aside>
	);
};

export default ToggleAside;
