import React from 'react';
import { TypographyProps } from './types';

export const Title: React.FC<
	TypographyProps & { as?: keyof JSX.IntrinsicElements }
> = ({ value, as = 'h1' }) => {
	return React.createElement(as, {}, value);
};

export const Text: React.FC<
	TypographyProps & { as?: keyof JSX.IntrinsicElements }
> = ({ value, as = 'p' }) => {
	return React.createElement(as, {}, value);
};
