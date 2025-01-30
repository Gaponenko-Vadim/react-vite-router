import style from './styles.module.scss';
import React from 'react';
import { CardProps } from './type';
import Typography from '@/components/Typography';

const Card: React.FC<CardProps> = ({ title, children }) => (
	<div className={style['card-section']}>
		<Typography.Title as="h3" value={title} />
		<Typography.Text as="div" value={children} />
	</div>
);

export default Card;
