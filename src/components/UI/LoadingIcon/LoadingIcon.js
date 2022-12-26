import React from 'react';

const LoadingIcon = (props) => {
	return (
		<div className='d-flex justify-content-center align-items-center'>
			<strong>Trwa wyszukiwanie hotelu</strong>
			<div className={`spinner-border m-5 text-${props.themeColor}`} role='status'>
				<span className='sr-only'></span>
			</div>
		</div>
	);
};

export default LoadingIcon;
