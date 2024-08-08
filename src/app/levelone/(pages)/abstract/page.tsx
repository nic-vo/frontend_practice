import AbstractFooter from './_components_/AbstractFooter';
import AbstractHeader from './_components_/AbstractHeader';

const AbstractHomepage = () => {
	return (
		<>
			<AbstractHeader />
			<main>
				<section>
					<div>
						<h2>How can we help?</h2>
						{/* TODO: Search bar that redirects to appropriate URL */}
					</div>
				</section>
				<div></div>
			</main>
			<AbstractFooter />
		</>
	);
};

export default AbstractHomepage;

export const metadata = {
	title: 'Abstract Clone',
};
