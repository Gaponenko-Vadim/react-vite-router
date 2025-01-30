import React from 'react';
import { Link } from 'react-router-dom';
import { AnchorProps } from './types';

const Anchor: React.FC<AnchorProps> = ({ href, children }) => {
	return <Link to={href}>{children}</Link>;
};

export default Anchor;
