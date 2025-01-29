import React from 'react';
import Layout from '../../containers/Layout';
import Section from '../../containers/Section';
import Card from '../../containers/Card';
import LoginForm from '../../screens/LoginForm';

type LoginPageProps = {
	title: string;
	onSubmit: (email: string, password: string) => void;
};

const LoginPage: React.FC<LoginPageProps> = ({ title, onSubmit }) => {
	return (
		<Layout>
			<Section>
				<Card>
					<h2>{title}</h2>
					<LoginForm onSubmit={onSubmit} />
				</Card>
			</Section>
		</Layout>
	);
};

export default LoginPage;
