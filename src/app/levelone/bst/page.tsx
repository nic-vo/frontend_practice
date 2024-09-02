import { BSTContentElements } from './_components/Content';
import BSTMain from './_components/BSTMain';
import { BSTScrollProvider } from './_components/BSTScroll';
import BSTHeader from './_components/BSTHeader';
import BSTFooter from './_components/BSTFooter';

const BSTHomepage = () => {
	return (
		<BSTScrollProvider>
			<BSTMain>
				<BSTHeader />
				<ul className='h-full sm:overflow-hidden scroll-smooth'>
					{BSTContentElements.map((IssueComponent, index) => (
						<IssueComponent key={`map${index}`} />
					))}
				</ul>
				<BSTFooter />
			</BSTMain>
		</BSTScrollProvider>
	);
};

export default BSTHomepage;

export const metadata = {
	title: 'Backstage Talks Clone',
};
