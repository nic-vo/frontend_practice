import Link from 'next/link';
import { PropsWithChildren } from 'react';

import '@/styles/globals.css';

export default function PagesRootLayout(props: PropsWithChildren) {
	return (
		<html lang='en'>
			<body>
				{props.children}
				<div className='fixed bottom-4 z-20 p-2 bg-black text-white'><Link href='/'>Home</Link></div>
			</body>
		</html>
	);
}
