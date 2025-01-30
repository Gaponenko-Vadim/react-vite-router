import React, { useState } from 'react';
import Form from '../../containers/Form';
import Input from '../../components/Input';
import Action from '../../components/Action';
import style from './styles.module.css';
import { RegisterFormProps } from './types';

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(name, email, password, confirmPassword);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Name"
			/>
			<Input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
			/>
			<Input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
			/>
			<Input
				type="password"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
				placeholder="Confirm Password"
			/>
			<Action disabled={false} className={style['register-btn']}>
				Register
			</Action>
		</Form>
	);
};

export default RegisterForm;
