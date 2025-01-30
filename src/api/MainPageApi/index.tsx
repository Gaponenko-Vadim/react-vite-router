import { MainPageData } from './types';
export const getMainPageData = (): Promise<MainPageData> => {
	return Promise.resolve({
		message: 'Main Page Data',
	});
};
