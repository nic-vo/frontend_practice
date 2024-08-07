'use client';

import { useEffect, useRef, useState } from 'react';

import {
	IoAdd,
	IoMenu,
	IoRemove,
	IoChevronUp,
	IoChevronDown,
} from 'react-icons/io5';

import { outfit } from './AbletonStyles';
import interactiveLook from './interactive.module.scss';
import globalLook from '@/styles/globals.module.scss';
import { SafeExternalLink } from '@/components/global/Commons';

const weirdDivClasser = (toggled: boolean) => {
	const navContainerClassObject = {
		position: 'absolute lg:relative',
		display: 'flex flex-col',
		height: 'h-dvh lg:h-min',
		width: 'w-full',
		overflow: 'overflow-y-auto',
		backgroundColor: 'bg-blue-400 lg:bg-white',
		z: 'z-20',
		gap: 'gap-6',
		padding: 'p-4 pt-8 lg:pt-4 lg:px-8',
		transitions: 'transition-transform lg:transition-none',
		translate: '-translate-y-full lg:translate-y-0',
	};
	const base = Object.values(navContainerClassObject).join(' ');
	if (!toggled) return base;
	return base + ' translate-y-0 ' + interactiveLook.toggled;
};

const firstULClasser = () => {
	return [
		'flex',
		'flex-col',
		'lg:flex-row',
		'gap-4',
		'mt-6',
		'lg:gap-8',
		'lg:mt-1',
		'lg:ml-24',
		'font-semibold',
		'text-lg',
		interactiveLook.list,
		interactiveLook.spaced,
	].join(' ');
};

const AbletonHeader = () => {
	const [toggled, setToggled] = useState(false);
	const focusRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		if (toggled && focusRef.current) focusRef.current.focus();
	}, [toggled]);

	return (
		<header
			className={`flex flex-col w-full lg:max-w-screen-2xl bg-white ${outfit.className}`}>
			<nav className='w-full h-16 lg:h-auto border-b-2'>
				<a
					rel='noreferrer'
					referrerPolicy='no-referrer'
					href='https://www.ableton.com/en/'
					target='_blank'
					className={`absolute flex z-40 ml-4 lg:ml-8 mt-4 text-3xl ${interactiveLook.logo}`}>
					<IoMenu />
					<IoMenu />
					<span className={globalLook.hiddenAccessibleText}>Home</span>
				</a>
				<button
					onClick={() => setToggled(!toggled)}
					className='absolute flex lg:hidden items-center gap-2 ml-24 mt-4 font-medium text-xl z-40'>
					Menu {toggled ? <IoChevronUp /> : <IoChevronDown />}
				</button>
				<div className={weirdDivClasser(toggled)}>
					<ul className={firstULClasser()}>
						<li>
							<SafeExternalLink href='https://www.ableton.com/en/live'>
								Live
							</SafeExternalLink>
						</li>
						<li>
							<SafeExternalLink href='https://www.ableton.com/en/push'>
								Push
							</SafeExternalLink>
						</li>
						<li>
							<SafeExternalLink href='https://www.ableton.com/en/note'>
								Note
							</SafeExternalLink>
						</li>
						<li>
							<SafeExternalLink href='https://www.ableton.com/en/link'>
								Link
							</SafeExternalLink>
						</li>
						<li>
							<SafeExternalLink href='https://www.ableton.com/en/shop'>
								Shop
							</SafeExternalLink>
						</li>
						<li>
							<SafeExternalLink href='https://www.ableton.com/en/packs'>
								Packs
							</SafeExternalLink>
						</li>
						<li>
							<SafeExternalLink href='https://www.ableton.com/en/help'>
								Help
							</SafeExternalLink>
						</li>
						<li className='hidden lg:list-item'>
							<button
								onClick={() => setToggled(!toggled)}
								className='flex items-center gap-2 text-inherit lg:text-red-400'>
								More {toggled ? <IoRemove /> : <IoAdd />}
							</button>
						</li>
						<li>
							<SafeExternalLink
								href='https://www.ableton.com/en/trial'
								className='text-inherit lg:text-blue-700'>
								Try Live 12 for free
							</SafeExternalLink>
						</li>
						<li>
							<SafeExternalLink href='https://www.ableton.com/en/login/?next=/en/about/'>
								Log in or register
							</SafeExternalLink>
						</li>
					</ul>
					<section className={`flex-col gap-4 ${interactiveLook.selDis}`}>
						<h2
							className='text-2xl'
							ref={focusRef}
							tabIndex={-1}>
							More on Ableton.com:
						</h2>
						<ul className='flex flex-col lg:flex-row gap-4 lg:gap-8 text-sm lg:text-base'>
							<li>
								<SafeExternalLink href='https://www.ableton.com/en/blog'>
									Blog
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='https://www.ableton.com/en/classroom'>
									Ableton for the Classroom
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='https://www.ableton.com/en/colleges-universities'>
									Ableton for Colleges and Universities
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='https://www.ableton.com/en/certified-training'>
									Certified Training
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink
									href='https://www.ableton.com/en/about'
									className='lg:text-red-400'>
									About Ableton
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='https://www.ableton.com/en/jobs'>
									Jobs
								</SafeExternalLink>
							</li>
							<li>
								<SafeExternalLink href='https://www.ableton.com/en/ausbildung'>
									Apprenticeships
								</SafeExternalLink>
							</li>
						</ul>
					</section>
					<section className={`flex-col gap-4 ${interactiveLook.selDis}`}>
						<h2 className='text-2xl'>More from Ableton:</h2>
						<ul className='flex flex-row gap-4 pb-4 text-sm lg:text-base lg:pb-0 lg:gap-8 overflow-x-auto'>
							<li className='w-1/4 min-w-64 lg:min-w-1/4 shrink-0 lg:shrink'>
								<SafeExternalLink href='https://www.ableton.com/en/blog/categores/loop'>
									<h3 className='font-semibold'>Loop</h3>
									<span>
										Watch Talks, Performances and Features from Ableton&apos;s
										Summit for Music Makers
									</span>
								</SafeExternalLink>
							</li>
							<li className='w-1/4 min-w-64 lg:min-w-1/4 shrink-0 lg:shrink'>
								<SafeExternalLink href='https://learningmusic.ableton.com/'>
									<h3 className='font-semibold'>Learning Music</h3>
									<span>
										Learn the fundamentals of music making right in your
										browser.
									</span>
								</SafeExternalLink>
							</li>
							<li className='w-1/4 min-w-64 lg:min-w-1/4 shrink-0 lg:shrink'>
								<SafeExternalLink href='https://learningsynths.ableton.com/'>
									<h3 className='font-semibold'>Learning Synths</h3>
									<span>
										Get started with synthesis using a web-based synth and
										accompanying lessons.
									</span>
								</SafeExternalLink>
							</li>
							<li className='w-1/4 min-w-64 lg:min-w-1/4 shrink-0 lg:shrink'>
								<SafeExternalLink href='https://makingmusic.ableton.com/'>
									<h3 className='font-semibold'>Making Music</h3>
									<span>
										Some tips from 74 Creative Strategies for Electronic
										Producers.
									</span>
								</SafeExternalLink>
							</li>
						</ul>
					</section>
				</div>
			</nav>
			<nav className='sticky'>
				<ul className='flex p-6 gap-8'>
					<li>
						<SafeExternalLink
							href='https://www.ableton.com/en/about'
							className='text-red-400'>
							About
						</SafeExternalLink>
					</li>
					<li>
						<SafeExternalLink href='https://www.ableton.com/en/jobs'>
							Jobs
						</SafeExternalLink>
					</li>
					<li>
						<SafeExternalLink href='https://www.ableton.com/en/ausbildung'>
							Apprenticeships
						</SafeExternalLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default AbletonHeader;
