'use client';

import { ChangeEvent, useContext, useState } from 'react';
import AbstractSearchContext from './AbstractSearch';
import { IoArrowForward } from 'react-icons/io5';

import interactiveLook from '@/styles/globals.module.scss';

const AbstractHeroForm = () => {
	const [current, setCurrent] = useState('');
	const { setNewQuery } = useContext(AbstractSearchContext);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
		setCurrent(e.target.value);

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		setNewQuery(current);
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<h2>How can we help?</h2>
			<input
				type='search'
				name='querySingle'
				required={true}
				onChange={onChangeHandler}
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
