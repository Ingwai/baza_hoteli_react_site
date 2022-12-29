import React from 'react';
import ThemeContext from '../../../context/themeContext';
import { useContext } from 'react';

const LoadingIcon = props => {
	const themeColor = useContext(ThemeContext);
	return (
		<div className='d-flex justify-content-center align-items-center'>
			<strong>Trwa wyszukiwanie hotelu</strong>
			<div className={`spinner-border m-5 text-${themeColor.color}`} role='status'>
				<span className='sr-only'></span>
			</div>
		</div>
	);
};

export default LoadingIcon;
