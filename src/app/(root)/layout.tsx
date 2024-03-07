import { PropsWithChildren } from 'react';

import '@/styles/globals.css';

export default function HomepageRootLayout(props: PropsWithChildren) {
	return (
		<html lang='en'>
			<body>
				{props.children}
			</body>
		</html>
	);
}
