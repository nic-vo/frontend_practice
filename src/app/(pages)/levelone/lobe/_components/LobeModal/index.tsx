import {
	LobeModalButton,
	LobeModalContextProvider,
	LobeModalDialog,
} from './client';

const LobeModal = () => (
	<LobeModalContextProvider>
		<LobeModalButton />
		<LobeModalDialog>
			<iframe
				width='960'
				height='540'
				src='https://www.youtube.com/embed/Mdcw3Sb98DA?si=tpY7QrQVotrCdMHx'
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				referrerPolicy='strict-origin-when-cross-origin'
				allowFullScreen
				className='rounded-3xl'></iframe>
		</LobeModalDialog>
	</LobeModalContextProvider>
);

export default LobeModal;
