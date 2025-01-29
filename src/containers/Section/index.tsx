import React from 'react';
import { SectionProps } from './types';
import styles from './styles.module.scss';

const Section: React.FC<SectionProps> = ({ children }) => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>{children}</div>
		</section>
	);
};

export default Section;
