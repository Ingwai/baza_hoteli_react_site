import React from 'react';

const LoadingButton = props => {
	const className = props.className || 'btn-primary';

	return props.loading ? (
		<button className={`btn ${className}`} type='button' disabled>
			<span className='spinner-border spinner-border-sm'></span>
			<span className='sr-only'> Loading...</span>
		</button>
	) : (
		<button className={`btn ${className} mt-2`} {...props}>{props.children}</button>
	);
};

export default LoadingButton;
