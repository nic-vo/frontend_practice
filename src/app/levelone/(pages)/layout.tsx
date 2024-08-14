import { LayoutDefaultMetadata } from '@/components/panel';

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

export const metadata = LayoutDefaultMetadata;
