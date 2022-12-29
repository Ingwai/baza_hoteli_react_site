import React from 'react';
import ThemeContext from '../../context/themeContext';
import { useContext } from 'react';

const Footer = () => {
	const themeColor = useContext(ThemeContext);
	return <div className={`text-center m-3 text-${themeColor.color}`}> &#169; Copyright by Hotels in Poland 2022</div>;
};
export default Footer;
