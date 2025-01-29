import React from 'react';
import { Link } from 'react-router-dom';
import { ActionProps } from './types';
import style from './action.module.scss';

const Action = ({
	onClick,
	children,
	disabled = false,
	className = '',
	href,
	...props
}: ActionProps & { href?: string }) => {
	const classes = [
		style.button,
		disabled ? style['button--disabled'] : '',
		className,
	]
		.join(' ')
		.trim();

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		if (disabled) {
			e.preventDefault();
		} else if (onClick) {
			onClick(e);
		}
	};

	return href ? (
		<Link
			className={classes}
			to={disabled ? '#' : href}
			onClick={handleClick}
			role="button"
			tabIndex={0}
			aria-disabled={disabled}
			{...props}
		>
			{children}
		</Link>
	) : (
		<button
			className={classes}
			onClick={handleClick}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};

export default Action;
