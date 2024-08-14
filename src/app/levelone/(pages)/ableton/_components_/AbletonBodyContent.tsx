import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { studio001 } from './images';

export const AbletonSection = (props: PropsWithChildren) => {
	return (
		<section className='flex flex-col gap-4 w-4/5 lg:max-w-prose'>
			{props.children}
		</section>
	);
};

export const AbletonHero = () => {
	return (
		<div className='flex flex-col items-center w-4/5 lg:w-full max-w-screen-2xl overflow-hidden'>
			<h1 className='block absolute z-10 top-1/2 -translate-y-1/2 text-9xl text-red-500'>
				Ableton
			</h1>
			<div className='h-svh w-max'>
				<Image
					src={studio001}
					alt={'A person with the hand on a keyboard working in a DAW'}
					sizes='100vw'
					quality={75}
					placeholder='blur'
					style={{
						height: '100%',
						width: 'auto',
						filter: 'brightness(1.2) contrast(0.95)',
					}}
				/>
			</div>
		</div>
	);
};
