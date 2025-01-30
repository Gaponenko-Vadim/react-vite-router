import { RegisterPageData } from './types';
export const getRegisterPageData = (): Promise<RegisterPageData> => {
	return Promise.resolve({
		message: 'Register Page Data',
	});
};
