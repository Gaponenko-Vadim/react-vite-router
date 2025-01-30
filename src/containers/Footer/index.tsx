import React from 'react';
import { FooterProps } from './type';
import style from './styles.module.scss';
import Menu from '@/components/Menu/Menu';
import menuItems from '@/assets/menuItems';

const Footer: React.FC<FooterProps> = ({ children }) => {
	return (
		<footer className={style.footer}>
			<div className={style.logo}>Logo</div>
			<Menu items={menuItems} />
			{children && <div className={style.additionalContent}>{children}</div>}
		</footer>
	);
};

export default Footer;
