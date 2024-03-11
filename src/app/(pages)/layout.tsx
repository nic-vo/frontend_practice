import { PropsWithChildren } from 'react';

import '@/styles/globals.css';

const PagesRootLayout = (props: PropsWithChildren) => {
	return (
		<html lang='en'>
			<body>{props.children}</body>
		</html>
	);
};

export default PagesRootLayout;
