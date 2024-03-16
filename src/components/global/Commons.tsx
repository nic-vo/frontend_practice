export const SafeExternalLink = (props: {
	href: string;
	children: React.ReactNode;
	className?: string;
	id?: string;
}) => {
	const { href, children, className, id } = props;
	return (
		<a
			href={href}
			className={className ?? ''}
			id={id ?? ''}
			target='_blank'
			rel='noreferrer'
			referrerPolicy='no-referrer'>
			{children}
		</a>
	);
};
