import Link from 'next/link';
import { PropsWithChildren } from 'react';

import '@/styles/globals.css';

export default function PagesRootLayout(props: PropsWithChildren) {
	return (
		<html lang='en'>
			<body>
				<header><Link href='/'>Home</Link></header>
				{props.children}
			</body>
		</html>
	);
}
