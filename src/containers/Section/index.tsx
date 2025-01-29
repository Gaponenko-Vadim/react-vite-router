import React from 'react';
import { SectionProps } from './types';
import styles from './styles.module.scss'; // Импортируем стили, если они нужны

const Section: React.FC<SectionProps> = ({ children }) => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>{children}</div>
		</section>
	);
};

export default Section;
