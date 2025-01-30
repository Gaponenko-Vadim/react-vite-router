import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { LayoutProps } from './type';

const Layout: React.FC<LayoutProps> = ({ children, wrapInMain = true }) => {
	return (
		<div className="container">
			<Header />
			{wrapInMain ? <main>{children}</main> : children}
			<Footer />
		</div>
	);
};

export default Layout;
