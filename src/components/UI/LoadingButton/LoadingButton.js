import React from 'react';

const LoadingButton = props => {
	const className = props.className || 'btn-primary';

	const buttonProps = { ...props };
	delete buttonProps.loading;

	return props.loading ? (
		<button className={`btn ${className}`} type='button' disabled>
			<span className='spinner-border spinner-border-sm'></span>
			<span className='sr-only'> Loading...</span>
		</button>
	) : (
		<button className={`btn ${className} mt-2`} {...buttonProps}>
			{props.children}
		</button>
	);
};

export default LoadingButton;
