import React from 'react';
import { ModalProps } from './type';
import styles from './styles.module.scss';

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
	return (
		<div className={styles.modal}>
			<div className={styles['modal-content']}>
				<div className={styles['modal-header']}>
					<button className={styles['modal-close']} onClick={onClose}>
						&times;
					</button>
				</div>
				<div className={styles['modal-body']}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
