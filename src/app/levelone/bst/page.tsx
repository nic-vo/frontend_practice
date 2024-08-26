import { BSTContentElements } from './_components/Content';
import BSTMain from './_components/BSTMain';

const BSTHomepage = () => {
	return (
		<>
			<header className='fixed z-10'>
				<h1>Backstage Talks Clone</h1>
				<nav>
					<ul>
						<li>
							<a href='#issue8'>Issue #8</a>
						</li>
						<li>
							<a href='#issue7'>Issue #7</a>
						</li>
						<li>
							<a href='#issue6'>Issue #6</a>
						</li>
						<li>
							<a href='#issue5'>Issue #5</a>
						</li>
						<li>
							<a href='#issue4'>Issue #4</a>
						</li>
						<li>
							<a href='#issue3'>Issue #3</a>
						</li>
						<li>
							<a href='#issue2'>Issue #2</a>
						</li>
						<li>
							<a href='#issue1'>Issue #1</a>
						</li>
					</ul>
				</nav>
			</header>
			<BSTMain>
				<ul className='h-full overflow-hidden scroll-smooth'>
					{BSTContentElements.map((IssueComponent, index) => (
						<IssueComponent key={`map${index}`} />
					))}
				</ul>
			</BSTMain>
		</>
	);
};

export default BSTHomepage;

export const metadata = {
	title: 'Backstage Talks Clone',
};
