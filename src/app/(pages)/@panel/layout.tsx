import { PropsWithChildren } from 'react';
import MainPanelComponent from './_components/Interface';

const PanelLayout = ({ children }: PropsWithChildren) => (
	<MainPanelComponent>{children}</MainPanelComponent>
);

export default PanelLayout;
