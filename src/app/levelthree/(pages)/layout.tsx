import type { Metadata } from 'next';

const DualView = (props: {
	children: React.ReactNode;
	panel: React.ReactNode;
}) => {
	const { panel, children } = props;
	return (
		<>
			{children}
			{panel}
		</>
	);
};

export default DualView;

export const metadata: Metadata = {
	title: {
		default: 'Nicolas Vo | A page clone',
		template: 'Nicolas Vo | %s',
	},
};
