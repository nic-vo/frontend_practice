'use client';

import { PropsWithChildren, createContext, useState } from 'react';

export type AbstractSearchContextValue = {
	query: string;
	setNewQuery: (q: string) => void;
};
const AbstractSearchContext = createContext<AbstractSearchContextValue>({
	query: '',
	setNewQuery: (q: string) => {},
});

export const AbstractSearchContextProvider = (props: PropsWithChildren) => {
	const [query, setQuery] = useState('');
	const setNewQuery = (q: string) => setQuery(q);
	return (
		<AbstractSearchContext.Provider value={{ query, setNewQuery }}>
			{props.children}
		</AbstractSearchContext.Provider>
	);
};

export default AbstractSearchContext;
