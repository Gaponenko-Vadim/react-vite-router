import React, { useState } from 'react';
import Form from '../../containers/Form';
import Input from '../../components/Input';
import Action from '../../components/Action';
import style from './styles.module.scss';
import { LoginFormProps } from './types';

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(email, password);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Action
				onClick={() => {}}
				disabled={false}
				className={style['login-btn']}
			>
				Login
			</Action>
		</Form>
	);
};

export default LoginForm;
