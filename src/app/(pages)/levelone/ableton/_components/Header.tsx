'use client';

import { useEffect, useRef, useState } from 'react';

import {
	FaPlus,
	FaAlignJustify,
	FaMinus,
	FaCaretUp,
	FaCaretDown,
} from 'react-icons/fa';

import { outfit } from '@/app/(pages)/levelone/ableton/_components/styles';
import interactiveLook from './interactive.module.scss';
import globalLook from '@/styles/globals.module.scss';

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
		translate: 'lg:translate-y-0',
		transitions: 'transition-transform',
	};
	const base = Object.values(navContainerClassObject).join(' ');
	if (toggled) return base;
	return base + ' -translate-y-full ' + interactiveLook.toggled;
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

const Header = () => {
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
					href='https://www.ableton.com/en/'
					target='_blank'
					className={`absolute flex z-40 ml-4 lg:ml-8 mt-4 text-3xl ${interactiveLook.logo}`}>
					<FaAlignJustify />
					<FaAlignJustify />
					<span className={globalLook.hiddenAccessibleText}>Home</span>
				</a>
				<button
					onClick={() => setToggled(!toggled)}
					className='absolute flex lg:hidden items-center gap-2 ml-24 mt-4 font-medium text-xl z-40'>
					Menu {toggled ? <FaCaretUp /> : <FaCaretDown />}
				</button>
				<div className={weirdDivClasser(toggled)}>
					<ul className={firstULClasser()}>
						<li>
							<a
								href='https://www.ableton.com/en/live'
								target='_blank'>
								Live
							</a>
						</li>
						<li>
							<a
								href='https://www.ableton.com/en/push'
								target='_blank'>
								Push
							</a>
						</li>
						<li>
							<a
								href='https://www.ableton.com/en/note'
								target='_blank'>
								Note
							</a>
						</li>
						<li>
							<a
								href='https://www.ableton.com/en/link'
								target='_blank'>
								Link
							</a>
						</li>
						<li>
							<a
								href='https://www.ableton.com/en/shop'
								target='_blank'>
								Shop
							</a>
						</li>
						<li>
							<a
								href='https://www.ableton.com/en/packs'
								target='_blank'>
								Packs
							</a>
						</li>
						<li>
							<a
								href='https://www.ableton.com/en/help'
								target='_blank'>
								Help
							</a>
						</li>
						<li className='hidden lg:list-item'>
							<button
								onClick={() => setToggled(!toggled)}
								className='flex items-center gap-2 text-inherit lg:text-red-400'>
								More {toggled ? <FaMinus /> : <FaPlus />}
							</button>
						</li>
						<li>
							<a
								href='https://www.ableton.com/en/trial'
								target='_blank'
								className='text-inherit lg:text-blue-700'>
								Try Live 12 for free
							</a>
						</li>
						<li>
							<a
								href='https://www.ableton.com/en/login/?next=/en/about/'
								target='_blank'>
								Log in or register
							</a>
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
								<a
									href='https://www.ableton.com/en/blog'
									target='_blank'>
									Blog
								</a>
							</li>
							<li>
								<a
									href='https://www.ableton.com/en/classroom'
									target='_blank'>
									Ableton for the Classroom
								</a>
							</li>
							<li>
								<a
									href='https://www.ableton.com/en/colleges-universities'
									target='_blank'>
									Ableton for Colleges and Universities
								</a>
							</li>
							<li>
								<a
									href='https://www.ableton.com/en/certified-training'
									target='_blank'>
									Certified Training
								</a>
							</li>
							<li>
								<a
									href='https://www.ableton.com/en/about'
									target='_blank'
									className='lg:text-red-400'>
									About Ableton
								</a>
							</li>
							<li>
								<a
									href='https://www.ableton.com/en/jobs'
									target='_blank'>
									Jobs
								</a>
							</li>
							<li>
								<a
									href='https://www.ableton.com/en/ausbildung'
									target='_blank'>
									Apprenticeships
								</a>
							</li>
						</ul>
					</section>
					<section className={`flex-col gap-4 ${interactiveLook.selDis}`}>
						<h2 className='text-2xl'>More from Ableton:</h2>
						<ul className='flex flex-row gap-4 pb-4 text-sm lg:text-base lg:pb-0 lg:gap-8 overflow-x-auto'>
							<li className='w-1/4 min-w-64 lg:min-w-1/4 shrink-0 lg:shrink'>
								<a
									href='https://www.ableton.com/en/blog/categores/loop'
									target='_blank'>
									<h3 className='font-semibold'>Loop</h3>
									<span>
										Watch Talks, Performances and Features from Ableton&apos;s
										Summit for Music Makers
									</span>
								</a>
							</li>
							<li className='w-1/4 min-w-64 lg:min-w-1/4 shrink-0 lg:shrink'>
								<a
									href='https://learningmusic.ableton.com/'
									target='_blank'>
									<h3 className='font-semibold'>Learning Music</h3>
									<span>
										Learn the fundamentals of music making right in your
										browser.
									</span>
								</a>
							</li>
							<li className='w-1/4 min-w-64 lg:min-w-1/4 shrink-0 lg:shrink'>
								<a
									href='https://learningsynths.ableton.com/'
									target='_blank'>
									<h3 className='font-semibold'>Learning Synths</h3>
									<span>
										Get started with synthesis using a web-based synth and
										accompanying lessons.
									</span>
								</a>
							</li>
							<li className='w-1/4 min-w-64 lg:min-w-1/4 shrink-0 lg:shrink'>
								<a
									href='https://makingmusic.ableton.com/'
									target='_blank'>
									<h3 className='font-semibold'>Making Music</h3>
									<span>
										Some tips from 74 Creative Strategies for Electronic
										Producers.
									</span>
								</a>
							</li>
						</ul>
					</section>
				</div>
			</nav>
			<nav className='sticky'>
				<ul className='flex p-6 gap-8'>
					<li>
						<a
							href='https://www.ableton.com/en/about'
							className='text-red-400'>
							About
						</a>
					</li>
					<li>
						<a
							href='https://www.ableton.com/en/jobs'
							target='_blank'>
							Jobs
						</a>
					</li>
					<li>
						<a
							href='https://www.ableton.com/en/ausbildung'
							target='_blank'>
							Apprenticeships
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
