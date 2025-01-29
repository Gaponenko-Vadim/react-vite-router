import React from 'react';
import { FormProps } from './types';

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(e); // Вызовем переданную функцию onSubmit
	};

	return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
