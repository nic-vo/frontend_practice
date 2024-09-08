import { LayoutDefaultMetadata } from '@/app/(pages)/@panel/_components';

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
