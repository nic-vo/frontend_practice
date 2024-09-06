import { SafeExternalLink } from '@/components/global/Commons';

const BSTFooter = () => (
	<footer className='flex flex-col items-center gap-8 md:fixed md:bottom-0 md:h-0 w-full pb-16 md:pb-0'>
		<div className='md:fixed md:bottom-4 md:left-4 font-bold w-11/12 md:w-64 flex flex-col items-center md:items-start'>
			<p>
				Backstage Talks is a magazine of casual, but in depth dialogues on
				design and business. Our decisions shape and influence this complex
				world—to have a chance to make the right ones, we need to talk.{' '}
			</p>
			<p className='font-normal'>
				&copy; 2024{' '}
				<SafeExternalLink
					href='http://buromilk.com/'
					className='hover:underline focus-visible:outline outline-black outline-offset-2'>
					Published by Buro Milk
				</SafeExternalLink>
			</p>
			<SafeExternalLink
				href='https://backstagetalks.com/privacy-policy.php'
				className='block mt-8 w-max hover:underline focus-visible:outline outline-black outline-offset-2'>
				Privacy Policy
			</SafeExternalLink>
		</div>
		<SafeExternalLink
			href='mailto:info@backstagetalks.com'
			className='md:fixed md:bottom-4 md:right-4 font-bold block w-max text-center hover:underline focus-visible:outline outline-black outline-offset-2'>
			info@backstagetalks.com
		</SafeExternalLink>
	</footer>
);

export default BSTFooter;
