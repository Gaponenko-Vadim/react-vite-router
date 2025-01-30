import React from 'react';
import Layout from '../../containers/Layout';
import Section from '../../containers/Section';
import Card from '../../containers/Card';
import RegisterForm from '../../screens/RegisterForm';
import { RegisterFormProps } from './types';

const handleRegisterSubmit = (
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
};

const RegisterPage: React.FC<RegisterFormProps> = () => {
	return (
		<Layout>
			<Section>
				<Card title="Register Account">
					<RegisterForm onSubmit={handleRegisterSubmit} />
				</Card>
			</Section>
		</Layout>
	);
};

export default RegisterPage;
