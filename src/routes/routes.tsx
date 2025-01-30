import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegistrPage';

export const routes = [
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/login',
		element: (
			<LoginPage
				title="Login Page"
				onSubmit={(email: string, password: string) => {
					console.log('Login submitted:', { email, password });
				}}
			/>
		),
	},
	{
		path: '/register',
		element: (
			<RegisterPage
				onSubmit={(
					name: string,
					email: string,
					password: string,
					confirmPassword: string
				) => {
					console.log('Register submitted:', {
						name,
						email,
						password,
						confirmPassword,
					});
				}}
			/>
		),
	},
];
