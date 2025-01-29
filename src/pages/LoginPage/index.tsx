import React from 'react';
import Layout from '../../containers/Layout';
import Section from '../../containers/Section';
import Card from '../../containers/Card';
import LoginForm from '../../screens/LoginForm';
import { LoginPageProps } from './types';

const LoginPage: React.FC<LoginPageProps> = ({ title, onSubmit }) => {
	return (
		<Layout>
			<Section>
				<Card title={title}>
					<LoginForm onSubmit={onSubmit} />
				</Card>
			</Section>
		</Layout>
	);
};

export default LoginPage;
