'use client';

import { LayoutNav } from '@/app/(pages)/@panel/_components';
import { usePathname } from 'next/navigation';

const LevelOnePanelDefault = () => {
	const pathName = usePathname();

	return (
		<>
			<p>{pathName}</p>
			<p>
				Looks like the info panel for this clone hasn&apos;t been created yet.
			</p>
			<nav>
				<ul>
					<LayoutNav upOne='/leveltwo' />
				</ul>
			</nav>
		</>
	);
};

export default LevelOnePanelDefault;
