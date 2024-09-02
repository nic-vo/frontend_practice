import { SafeExternalLink } from '@/components/global/Commons';

const BSTFooter = () => (
	<footer className='md:fixed md:bottom-0 md:h-0 w-full '>
		<div className='md:fixed bottom-4 left-4 font-bold w-64'>
			<p>
				Backstage Talks is a magazine of casual, but in depth dialogues on
				design and business. Our decisions shape and influence this complex
				world—to have a chance to make the right ones, we need to talk.{' '}
			</p>
			<p className='font-normal'>
				&copy; 2024{' '}
				<SafeExternalLink href='http://buromilk.com/'>
					Published by Buro Milk
				</SafeExternalLink>
			</p>
			<SafeExternalLink
				href='https://backstagetalks.com/privacy-policy.php'
				className='block mt-8'>
				Privacy Policy
			</SafeExternalLink>
		</div>
		<SafeExternalLink
			href='mailto:info@backstagetalks.com'
			className='md:fixed md:bottom-4 md:right-4 font-bold'>
			info@backstagetalks.com
		</SafeExternalLink>
	</footer>
);

export default BSTFooter;
