import Link from 'next/link';

export const OriginalNav = (props: { original: string }) => {
	return (
		<li>
			<Link href={props.original}>Original Site</Link>
		</li>
	);
};

export const LayoutNav = (props: { upOne: string }) => {
	return (
		<>
			<li>
				<Link href={props.upOne}>Back to index</Link>
			</li>
			<li>
				<Link href='/'>Home</Link>
			</li>
		</>
	);
};

export const InfoTitle = (props: { title: string }) => {
	return <h2 className='text-3xl font-bold'>{props.title}</h2>;
};

export const CloneMissing = () => {
	return (
		<main className='h-svh w-svw flex items-center'>
			<h1>@clone is missing!</h1>
		</main>
	);
};

export const InfoTitleMissing = () => {
	return <h1>@infotitle is missing!</h1>;
};

export const InfoMissing = () => {
	return <p>@info is missing!</p>;
};

export const InfoNavMissing = () => {
	return <Link href='/'>@infonav is missing! Go home</Link>;
};
