'use client';

import { SafeExternalLink } from '@/components/global/Commons';
import { useEffect, useState } from 'react';
import { IoHourglass } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

const LobeDLButton = ({
	className,
	reachable,
}: {
	className?: string;
	reachable: boolean;
}) => {
	const [agentIsWindows, setAgentIsWindows] = useState<null | boolean>(null);

	useEffect(() => {
		setAgentIsWindows(/Windows/.test(navigator.userAgent));
	}, []);

	return (
		<SafeExternalLink
			tabIndex={agentIsWindows === null || !reachable ? -1 : 0}
			href={
				agentIsWindows === null
					? ''
					: agentIsWindows
						? 'https://lobeprod.azureedge.net/downloads/windows/Lobe.exe'
						: 'https://lobeprod.azureedge.net/downloads/macos/Lobe.zip'
			}
			className={twMerge(['text-center', className])}>
			{agentIsWindows === null ? (
				<>
					<IoHourglass aria-hidden />
					<span className='sr-only'>Loading...</span>
				</>
			) : (
				'Download'
			)}
		</SafeExternalLink>
	);
};

export default LobeDLButton;
