import {
	GoDLoginContainer,
	GoDLoginContextProvider,
	GoDLoginLink,
	GoDLoginToggleButton,
} from './client';

const GoDHeaderLogin = () => (
	<GoDLoginContextProvider>
		<GoDLoginToggleButton />
		<GoDLoginContainer>
			<section>
				<h2>Registered Users</h2>
				<p>Have an account? Sign in now.</p>
				<GoDLoginLink href='https://sso.godaddy.com/?realm=idp&app=cart&path=%2Fcheckoutapi%2Fv1%2Fredirects%2Flogin'>
					Sign in
				</GoDLoginLink>
			</section>
			<section>
				<h2>New Customer</h2>
				<p>New to GoDaddy? Create an account to get started today.</p>
				<GoDLoginLink href='https://sso.godaddy.com/account/create?realm=idp&app=cart&path=%2Fcheckoutapi%2Fv1%2Fredirects%2Flogin'>
					Create an Account
				</GoDLoginLink>
			</section>
			<section>
				<h2>INBOX LINKS</h2>
				<GoDLoginLink href='https://sso.godaddy.com/?app=o365&realm=pass&marketid=en-US'>
					Sign in to Office 365 Email
				</GoDLoginLink>
				<GoDLoginLink href='https://email.godaddy.com/?target=blank'>
					Sign in to GoDaddy Webmail
				</GoDLoginLink>
			</section>
		</GoDLoginContainer>
	</GoDLoginContextProvider>
);

export default GoDHeaderLogin;
