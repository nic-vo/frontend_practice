import {
	Header,
	AbletonSection,
	AbletonHero,
	Footer,
	AbletonCookies,
} from './_components_';
import Image from 'next/image';
import {
	office001,
	office002,
	office003,
	office004,
	office005,
	office_ext,
	software001,
	studio002,
	turntables,
} from './_components_/images';

import { outfit } from './_components_/AbletonStyles';
import { SafeExternalLink } from '@/components/global/Commons';

const AbletonAboutPage = () => {
	return (
		<div className='bg-zinc-100 flex flex-col items-center overflow-hidden'>
			<AbletonCookies />
			<Header />
			<main
				className={
					outfit.className +
					' max-w-screen-xl min-h-screen flex flex-col items-center gap-y-16 pb-12 lg:pb-32 border-b-2 overflow-hidden w-full lg:max-w-screen-2xl bg-white'
				}>
				<AbletonHero />
				<AbletonSection>
					<h2 className='text-xl lg:text-3xl font-medium'>
						We make{' '}
						<SafeExternalLink
							href='https://www.ableton.com/en/live'
							className='text-blue-600'>
							Live
						</SafeExternalLink>
						,{' '}
						<SafeExternalLink
							href='https://www.ableton.com/en/push'
							className='text-blue-600'>
							Push
						</SafeExternalLink>
						,{' '}
						<SafeExternalLink
							href='https://www.ableton.com/en/note'
							className='text-blue-600'>
							Note
						</SafeExternalLink>
						and{' '}
						<SafeExternalLink
							href='https://www.ableton.com/en/link'
							className='text-blue-600'>
							Link
						</SafeExternalLink>{' '}
						— unique software and hardware for music creation and performance.
						With these products, our community of users creates amazing things.
					</h2>
					<p className='font-light'>
						Ableton was foundedin 1999 and released the first version of Live in
						2001. Our products are used by a community of dedicated musicians,
						sound designers, and artists from across the world.
					</p>
				</AbletonSection>
				<div className='flex after:h-full after:absolute after:bg-yellow-200 after:w-2/3 after:right-0 after-content:[""]'>
					<div className='flex items-center w-3/5 p-4 lg:p-16 z-10'>
						<Image
							placeholder='blur'
							src={turntables}
							alt='Close up shot of a mixing console'
							sizes='50vw'
						/>
					</div>
					<div className='flex items-center w-2/5 p-4 lg:p-16 z-10'>
						<Image
							placeholder='blur'
							src={office001}
							alt='A man sits towards the back of an arrangement of desks in an office space'
							sizes='50vw'
						/>
					</div>
				</div>
				<AbletonSection>
					<h2 className='text-xl lg:text-3xl font-medium'>
						Making music isn&apos;t easy. It takes time, effort, and learning.
						But when you&apos;re in the flow, it&apos;s incredibly rewarding.
					</h2>
					<p className='font-light'>
						We feel the same wary about making Ableton products. The driving
						force behind Ableton is our passion for what we make and the people
						we make it for.
					</p>
				</AbletonSection>
				{/* TODO: Optional -- embed YouTube interview with caption? */}
				<AbletonSection>
					<h2 className='text-xl lg:text-3xl font-medium'>
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
				</AbletonSection>
				<div className='flex items-center after:absolute after:content-[""] after:h-full after:w-3/5 after:bg-green-200'>
					<div className='flex flex-col p-4 lg:p-16 gap-4 z-10 w-2/5'>
						<Image
							placeholder='blur'
							src={office002}
							alt='A man writes on a whiteboard'
							sizes='50vw'
						/>
						<Image
							placeholder='blur'
							src={office_ext}
							alt='The exterior of an office building'
							sizes='50vw'
						/>
					</div>
					<div className='p-4 lg:p-16 z-10 w-3/5'>
						<Image
							placeholder='blur'
							src={studio002}
							alt='A man facing away from the camera towards a mixing console in a studio'
							sizes='50vw'
						/>
					</div>
				</div>
				<AbletonSection>
					<h2 className='text-xl lg:text-3xl font-medium'>
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
				</AbletonSection>
				<div className='p-4 lg:p-16 w-10/12 max-w-screen-xl'>
					<Image
						placeholder='blur'
						src={software001}
						alt='Closeup of a screen with DAW software running'
						sizes='100vw'
					/>
				</div>
				<AbletonSection>
					<h2 className='text-xl lg:text-3xl font-medium'>
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
				</AbletonSection>
				<div className='flex items-center justify-end after:h-full after:absolute after:bg-purple-300 after:w-9/12 after-content:[""] after:right-[16%] gap-4'>
					<div className='flex items-end w-2/6 py-4 lg:py-16 z-10'>
						<Image
							placeholder='blur'
							src={office003}
							alt='People in a conference room watch a presentation on the far wall'
							sizes='50vw'
						/>
					</div>
					<div className='flex w-1/2 py-4 lg:py-16 z-10 items-end'>
						<Image
							placeholder='blur'
							src={office004}
							alt='Two people work intently on their computers'
							sizes='50vw'
						/>
					</div>
				</div>
				<AbletonSection>
					<h2 className='text-xl lg:text-3xl font-medium'>
						We want our employees to love it here. Since we&apos;re looking for
						exceptional talent from around the world, we will do everything we
						can to make your transition as easy as possible.
					</h2>
					<p className='font-light'>
						If you&apos;re joining us in Berlin, we&apos;ll help with relocation
						and paperwork. We&apos;ll even provide you with free German or
						English lessons. Plus, working in Germany means you can expect
						comprehensive health insurance for you and your family, as well as
						generous maternity and paternity leave. Office hours are flexible,
						but it&apos;s not all work; we have several company and team outings
						thorughout the year as well as a variety of fun, informal
						small-group activities.
					</p>
				</AbletonSection>
				<div className='flex flex-col lg:flex-row w-10/12 max-w-screen-xl'>
					<div className='lg:w-1/2'>
						<Image
							placeholder='blur'
							src={office005}
							alt='An open office space with people scattered about at the desks'
							sizes='100vw'
						/>
					</div>
					<section className='lg:w-1/2 p-12 lg:p-24 bg-indigo-300 flex flex-col justify-center gap-4'>
						<h2 className='text-xl lg:text-3xl font-medium'>
							We&apos;re really proud of the work we&apos;ve done so far. But
							there&apos;s so much more to come. If you&apos;d like to be a part
							of it, please join us.
						</h2>
						<SafeExternalLink
							href='https://www.ableton.com/en/jobs'
							className="text-blue-700 after:content-['>']">
							See latest jobs
						</SafeExternalLink>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default AbletonAboutPage;

export const metadata = {
	title: 'Ableton Clone',
};
