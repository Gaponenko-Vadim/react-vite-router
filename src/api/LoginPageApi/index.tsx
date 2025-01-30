import { LoginPageData } from './types';

export const getLoginPageData = (): Promise<LoginPageData> => {
	return Promise.resolve({
		message: 'Login Page Data',
	});
};
