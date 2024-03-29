import {
	FaAlignJustify,
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';

import interactiveLook from './interactive.module.scss';
import globalLook from '@/styles/globals.module.scss';

const Footer = () => {
	return (
		<footer className='bg-white flex flex-col items-center w-full max-w-screen-2xl py-12 lg:py-24 text-sm lg:text-lg'>
			<div className='flex-grow w-10/12 flex lg:grid flex-col gap-12 lg:gap-16 grid-cols-5 grid-rows-min'>
				<h2 className='font-semibold text-4xl lg:text-6xl col-span-5'>
					Ableton
				</h2>
				<form
					action=''
					className='flex flex-col gap-1 lg:order-3 col-span-2'>
					<h3 className='font-semibold'>Sign up to our newsletter</h3>
					<label htmlFor='email'>
						Enter your email address to stay up to date with the latest offers,
						tutorials, downloads, surveys and more.
					</label>
					<div className='w-full flex mt-2'>
						<input
							id='email'
							type='email'
							placeholder='Email Address'
							className='flex-grow px-2 py-2 bg-zinc-200 placeholder:text-black placeholder:font-light'
						/>
						<button
							type='reset'
							className='px-4 py-2 bg-blue-700 text-white'>
							Sign up
						</button>
					</div>
				</form>
				<nav className='flex flex-col gap-8 col-span-3 lg:order-1 lg:grid grid-cols-2 grid-rows-2 lg:gap-16'>
					<div className='flex flex-col gap-2'>
						<ul className='flex flex-col gap-2 lg:gap-0'>
							<li>
								<a
									href='https://www.ableton.com/en/account/add_license'
									className="after:content-['>'] after:ml-1 after:font-thin">
									Register Live or Push
								</a>
							</li>
							<li>
								<a
									href='https://www.ableton.com/en/about'
									className="after:content-['>'] after:ml-1 after:font-thin">
									About Ableton
								</a>
							</li>
							<li>
								<a
									href='https://www.ableton.com/en/jobs'
									className="after:content-['>'] after:ml-1 after:font-thin">
									Jobs
								</a>
							</li>
						</ul>
						<ul className='flex text-3xl gap-2 text-white'>
							<li>
								<a
									href='facebook.com/ableton'
									target='_blank'
									className='block p-1.5 bg-blue-600'>
									<FaFacebook />
									<span className={globalLook.hiddenAccessibleText}>
										Facebook
									</span>
								</a>
							</li>
							<li>
								<a
									href='twitter.com/ableton'
									target='_blank'
									className='block p-1.5 bg-sky-500'>
									<FaTwitter />
									<span className={globalLook.hiddenAccessibleText}>
										Twitter
									</span>
								</a>
							</li>
							<li>
								<a
									href='youtube.com/ableton'
									target='_blank'
									className='block p-1.5 bg-red-500'>
									<FaYoutube />
									<span className={globalLook.hiddenAccessibleText}>
										YouTube
									</span>
								</a>
							</li>
							<li>
								<a
									href='instagram.com/ableton'
									target='_blank'
									className='block p-1.5 bg-orange-500'>
									<FaInstagram />
									<span className={globalLook.hiddenAccessibleText}>
										Instagram
									</span>
								</a>
							</li>
						</ul>
					</div>
					<section className='flex flex-col gap-2'>
						<h3 className='font-semibold'>Education</h3>
						<ul className='flex flex-col gap-2 lg:gap-0'>
							<li>
								<a
									href='https://www.ableton.com/en/shop/education'
									className="after:content-['>'] after:ml-1 after:font-thin">
									Offers for students and teachers
								</a>
							</li>
							<li>
								<a
									href='https://www.ableton.com/en/classroom'
									className="after:content-['>'] after:ml-1 after:font-thin">
									Ableton for the Classroom
								</a>
							</li>
							<li>
								<a
									href='https://www.ableton.com/en/colleges-universities'
									className="after:content-['>'] after:ml-1 after:font-thin">
									Ableton for Colleges and Universities
								</a>
							</li>
						</ul>
					</section>
					<section className='flex flex-col gap-2'>
						<h3 className='font-semibold'>Community</h3>
						<ul className='flex flex-col gap-2 lg:gap-0'>
							<li>
								<a
									href='https://www.ableton.com/en/community/user-groups'
									className="after:content-['>'] after:ml-1 after:font-thin">
									Find Ableton User Groups
								</a>
							</li>
							<li>
								<a
									href='https://www.ableton.com/en/certified-training'
									className="after:content-['>'] after:ml-1 after:font-thin">
									Find Certified Training
								</a>
							</li>
							<li>
								<a
									href='https://www.ableton.com/en/education/certification-program'
									className="after:content-['>'] after:ml-1 after:font-thin">
									Become a Certified Trainer
								</a>
							</li>
						</ul>
					</section>
					<section className='flex flex-col gap-2 lg:w-full'>
						<h3 className='font-semibold'>Language and Location</h3>
						<div className='flex gap-2 lg:gap-0.5'>
							<form>
								<label
									htmlFor='language'
									className={globalLook.hiddenAccessibleText}>
									Language
								</label>
								<select
									name='language'
									id='language'
									className='bg-zinc-200 p-1 font-medium lg:text-sm'>
									<option value='en'>English</option>
									<option value='de'>Deutsch</option>
									<option value='fr'>Français</option>
									<option value='jp'>日本語</option>
									<option value='cn'>简体中文</option>
									<option value='es'>Español</option>
								</select>
							</form>
							<form className='flex-grow'>
								<label
									htmlFor='location'
									className={globalLook.hiddenAccessibleText}>
									Location
								</label>
								<select
									name='location'
									id='location'
									className='bg-zinc-200 p-1 font-medium lg:text-sm w-full'>
									<optgroup label='Common Countries'>
										<option value='United States'>United States</option>
										<option value='United Kingdom'>United Kingdom</option>
										<option value='France'>France</option>
										<option value='Germany'>Germany</option>
										<option value='Canada'>Canada</option>
										<option value='Japan'>Japan</option>
										<option value='China'>China</option>
										<option value='Australia'>Australia</option>
									</optgroup>
									<optgroup label='All Countries'>
										<option value='Australia'>Australia</option>
										<option value='Belgium'>Belgium</option>
										<option value='Canada'>Canada</option>
										<option value='China'>China</option>
										<option value='Denmark'>Denmark</option>
										<option value='Estonia'>Estonia</option>
										<option value='France'>France</option>
										<option value='Germany'>Germany</option>
										<option value='Hungary'>Hungary</option>
										<option value='Italy'>Italy</option>
										<option value='Japan'>Japan</option>
										<option value='Korea'>Korea</option>
										<option value='Latvia'>Latvia</option>
										<option value='Mexico'>Mexico</option>
										<option value='Netherlands'>Netherlands</option>
										<option value='Oman'>Oman</option>
										<option value='Poland'>Poland</option>
										<option value='Qatar'>Qatar</option>
										<option value='Russia'>Russia</option>
										<option value='Spain'>Spain</option>
										<option value='Turkey'>Turkey</option>
										<option value='United Kingdom'>United Kingdom</option>
										<option value='United States'>United States</option>
										<option value='Vietnam'>Vietnam</option>
										<option value='Yemen'>Yemen</option>
										<option value='Zimbabwe'>Zimbabwe</option>
									</optgroup>
								</select>
							</form>
						</div>
					</section>
					<ul className='flex flex-col gap-2 lg:text-sm font-medium lg:flex-row col-span-2'>
						<li>
							<a href='https://www.ableton.com/en/contact-us'>Contact Us</a>
						</li>
						<li>
							<a href='https://www.ableton.com/en/press'>Press Resources</a>
						</li>
						<li>
							<a href='https://www.ableton.com/en/legal'>Legal Info</a>
						</li>
						<li>
							<a href='https://www.ableton.com/en/privacy-policy'>
								Privacy Policy
							</a>
						</li>
						<li>
							<a href='https://www.ableton.com/en/cookie-settings'>
								Cookie Settings
							</a>
						</li>
						<li>
							<a href='https://www.ableton.com/en/imprint'>Imprint</a>
						</li>
					</ul>
				</nav>
				<div className='flex items-center gap-4 lg:absolute lg:bottom-0 lg:right-0 lg:flex-row-reverse'>
					<a
						href='https://www.ableton.com/en/'
						target='_blank'
						className={`flex z-40 text-3xl lg:text-2xl ${interactiveLook.logo}`}>
						<FaAlignJustify />
						<FaAlignJustify />
					</a>
					<span className='block h-full lg:font-medium lg:text-sm'>Made in Berlin</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
