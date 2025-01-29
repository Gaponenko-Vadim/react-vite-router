import React, { useState } from 'react';
import Layout from '../../containers/Layout';
import Section from '../../containers/Section';
import Action from '../../components/Action';
import Modal from '../../containers/Modal';
import LoginForm from '../../screens/LoginForm';
import RegisterForm from '../../screens/RegisterForm';
import style from './style.module.scss';

const MainPage: React.FC = () => {
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showRegisterModal, setShowRegisterModal] = useState(false);

	return (
		<Layout>
			<Section>
				<Action
					onClick={() => setShowLoginModal(true)}
					className={style['action-button']}
				>
					Login
				</Action>
				<Action
					onClick={() => setShowRegisterModal(true)}
					className={style['action-button']}
				>
					Register
				</Action>

				{showLoginModal && (
					<Modal onClose={() => setShowLoginModal(false)}>
						<LoginForm
							onSubmit={(email, password) => {
								console.log('Login:', { email, password });
								setShowLoginModal(false);
							}}
						/>
					</Modal>
				)}

				{showRegisterModal && (
					<Modal onClose={() => setShowRegisterModal(false)}>
						<RegisterForm
							onSubmit={(name, email, password, confirmPassword) => {
								console.log('Register:', {
									name,
									email,
									password,
									confirmPassword,
								});
								setShowRegisterModal(false);
							}}
						/>
					</Modal>
				)}
			</Section>
		</Layout>
	);
};

export default MainPage;
