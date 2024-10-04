import {
	GoDLoginContainer,
	GoDLoginContextProvider,
	GoDLoginLink,
	GoDLoginToggleButton,
} from './client';

import { PropsWithChildren } from 'react';

const Section = ({ children }: PropsWithChildren) => (
	<section className='py-4 flex flex-col gap-2'>{children}</section>
);

const GoDHeaderLogin = () => (
	<GoDLoginContextProvider>
		<GoDLoginToggleButton />
		<GoDLoginContainer>
			<Section>
				<h2 className='font-bold'>Registered Users</h2>
				<p>Have an account? Sign in now.</p>
				<GoDLoginLink href='https://sso.godaddy.com/?realm=idp&app=cart&path=%2Fcheckoutapi%2Fv1%2Fredirects%2Flogin'>
					Sign in
				</GoDLoginLink>
			</Section>
			<Section>
				<h2 className='font-bold'>New Customer</h2>
				<p>New to GoDaddy? Create an account to get started today.</p>
				<GoDLoginLink href='https://sso.godaddy.com/account/create?realm=idp&app=cart&path=%2Fcheckoutapi%2Fv1%2Fredirects%2Flogin'>
					Create an Account
				</GoDLoginLink>
			</Section>
			<Section>
				<h2>INBOX LINKS</h2>
				<GoDLoginLink href='https://sso.godaddy.com/?app=o365&realm=pass&marketid=en-US'>
					Sign in to Office 365 Email
				</GoDLoginLink>
				<GoDLoginLink href='https://email.godaddy.com/?target=blank'>
					Sign in to GoDaddy Webmail
				</GoDLoginLink>
			</Section>
		</GoDLoginContainer>
	</GoDLoginContextProvider>
);

export default GoDHeaderLogin;
