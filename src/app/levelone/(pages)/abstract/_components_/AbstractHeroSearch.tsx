'use client';

import { IoArrowForward } from 'react-icons/io5';

import interactiveLook from '@/styles/globals.module.scss';

const AbstractHeroForm = () => {
	return (
		<form>
			<h2>How can we help?</h2>
			<input
				type='search'
				required={true}
			/>
			<button type='submit'>
				<IoArrowForward />
				<span className={interactiveLook.hiddenAccessibleText}>
					Search our documentation
				</span>
			</button>
		</form>
	);
};

export default AbstractHeroForm;
