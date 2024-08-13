'use client';
import { useState } from 'react';

const useAbstractSearch = () => {
	const [query, setQuery] = useState('');

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		window.location.assign(
			`https://help.abstract.com/hc/en-us/search?utf8=✓&query=${encodeURIComponent(query)}`,
		);
	};

	return { submitHandler, query, setQuery };
};

export default useAbstractSearch;
