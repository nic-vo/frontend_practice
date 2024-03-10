import { Header, Section, Hero, Footer } from '@/components/levelone/ableton';
import { outfit } from '@/components/levelone/ableton/styles';

export default function AbletonAboutPage() {
	return (
		<div className='bg-zinc-100 flex flex-col items-center overflow-hidden'>
			<Header />
			<main
				className={
					outfit.className +
					' max-w-screen-xl min-h-screen flex flex-col items-center gap-y-16 pb-8 border-b-2 overflow-hidden w-full lg:max-w-screen-2xl bg-white'
				}>
				<Hero />
				<Section>
					<h2 className='text-3xl font-medium'>
						We make{' '}
						<a
							href='https://www.ableton.com/en/live'
							className='text-blue-600'>
							Live
						</a>
						,{' '}
						<a
							href='https://www.ableton.com/en/push'
							className='text-blue-600'>
							Push
						</a>
						,{' '}
						<a
							href='https://www.ableton.com/en/note'
							className='text-blue-600'>
							Note
						</a>{' '}
						and{' '}
						<a
							href='https://www.ableton.com/en/link'
							className='text-blue-600'>
							Link
						</a>{' '}
						— unique software and hardware for music creation and performance.
						With these products, our community of users creates amazing things.
					</h2>
					<p className='font-light'>
						Ableton was foundedin 1999 and released the first version of Live in
						2001. Our products are used by a community of dedicated musicians,
						sound designers, and artists from across the world.
					</p>
				</Section>
				{/* TODO: First studio image and first office image */}
				<Section>
					<h2 className='text-3xl font-medium'>
						Making music isn&apos;t easy. It takes time, effort, and learning.
						But when you&apos;re in the flow, it&apos;s incredibly rewarding.
					</h2>
					<p className='font-light'>
						We feel the same wary about making Ableton products. The driving
						force behind Ableton is our passion for what we make and the people
						we make it for.
					</p>
				</Section>
				{/* TODO: Optional -- embed YouTube interview with caption? */}
				<Section>
					<h2 className='text-3xl font-medium'>
						We are more than 350 people from 30 different countries divided
						between our headquarters in Berlin and our offices in Los Angeles
						and Tokyo.
					</h2>
					<p className='font-light'>
						Most of us are active musicians, producers, and DJs, and many of us
						use Live and Push every day. We come from a wide range of cultural
						and professional backgrounds. Some of us have PhDs, some are
						self-taught, and most of us are somewhere in between. What connects
						us is the shared belief that each of us has the skills and knowledge
						to contribute to something big: helping to shape the furture of
						music culture.
					</p>
				</Section>
				{/* TODO: two columns with photos: left top is whiteboard, left bottom is office building, right is studio */}
				<Section>
					<h2 className='text-3xl font-medium'>
						We believe it takes focus to create truly outstanding instruments.
						We only work on a few products and we strive to make them great.
					</h2>
					<p className='font-light'>
						Rather than having a one-size-fits-all process, we try to give our
						people what they need to work their magic and grow. We&apos;ve
						learned that achieving the best results comes from building teams
						that are richly diverse, and thus able to explore problems from a
						wider set of perspectives. We don&apos;t always agree with each
						other, but opinion and debate are valued and openly encouraged.
					</p>
				</Section>
				{/* TODO: DAW image */}
				<Section>
					<h2 className='text-3xl font-medium'>
						We&apos;re passionate about what we do, but we&apos;re equally
						passionate about improving who we are.
					</h2>
					<p className='font-light'>
						We work hard to foster an environment where people can grow both
						personally and professionally, and we strive to create a wealth of
						opportunities to learn from and with each other.
					</p>
					<p className='font-light'>
						Alongside an internal training program, employees are actively
						supported in acquiring new knowledge and skills and coached on
						applying these in their daily work. In addition, staff-organized
						development and music salons are a chance to{' '}
					</p>
				</Section>
			</main>
			<Footer />
		</div>
	);
}

export const metadata = {
	title: 'Nic Vo | Ableton Clone',
};
