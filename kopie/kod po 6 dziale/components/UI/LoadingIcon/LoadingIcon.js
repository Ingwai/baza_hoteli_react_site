import React from 'react';

const LoadingIcon = () => {
	return (
		<div className='d-flex justify-content-center align-items-center'>
			<strong>Trwa wyszukiwanie hotelu</strong>
			<div className='spinner-border m-5' role='status'>
				<span className='sr-only'></span>
			</div>
		</div>
	);
};

export default LoadingIcon;
