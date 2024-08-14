import { PropsWithChildren } from 'react';

import '@/styles/globals.css';

const HomepageRootLayout = (props: PropsWithChildren) => {
	return (
		<html lang='en'>
			<body>{props.children}</body>
		</html>
	);
};

export default HomepageRootLayout;

export const metadata = {
	authors: [{ name: 'Nicolas Vo', url: 'https://nicvo.dev' }],
	creator: 'Nicolas Vo',
	publisher: 'Nicolas Vo',
};
