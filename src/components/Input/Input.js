import React, { useRef } from 'react';
// import PropTypes from 'prop-types;';

const InputText = props => {
	return (
		<div className='form-group mt-3'>
			<label>{props.label}</label>
			<input
				type={props.type}
				className={`form-control ${props.error && props.showError ? 'is-invalid' : ''}`}
				value={props.value}
				onChange={e => props.onChange(e.target.value)}
			/>
			<div className='invalid-feedback'>{props.error}</div>
		</div>
	);
};

const InputSelect = props => {
	return (
		<div className='form-group mt-3'>
			<label>{props.label}</label>

			<select
				className={`form-control ${props.error && props.showError ? 'is-invalid' : ''}`}
				value={props.value}
				onChange={e => props.onChange(e.target.value)}>
				{props.options.map(option => (
					<option value={option.value} key={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<div className='invalid-feedback'>{props.error}</div>
		</div>
	);
};

const InputCheckbox = props => {
	const changeFeaturesHandler = e => {
		const value = e.target.value;
		const isChecked = e.target.checked;
		if (isChecked) {
			const newValue = [...props.value, value];
			props.onChange(newValue);
		} else {
			const newValue = props.value.filter(el => el !== value);
			props.onChange(newValue);
		}
	};

	return (
		<div className='form-group'>
			{props.options.map(option => (
				<div className='custom-control custom-checkbox' key={option.value}>
					<input
						className='custom-control-input'
						id={option.value}
						value={option.value}
						type='checkbox'
						checked={props.value.find(el => el === option.values)}
						onChange={changeFeaturesHandler}
					/>
					<label className='custom-control-label ms-2' htmlFor={option.value}>
						{option.label}
					</label>
				</div>
			))}
		</div>
	);
};

const InputTextarea = props => {
	return (
		<div className='form-group mt-3'>
			<label>{props.label}</label>
			<textarea
				type={props.type}
				className={`form-control ${props.error && props.showError ? 'is-invalid' : ''}`}
				value={props.value}
				onChange={e => props.onChange(e.target.value)}
			/>
			<div className='invalid-feedback'>{props.error}</div>
		</div>
	);
};

const InputFile = props => {
	const fileRef = useRef();

	const changeHandler = e => {
		props.onChange(e.target.files[0]);
	};

	return (
		<div className='form-group'>
			<input type='file' ref={fileRef} onChange={changeHandler} />
		</div>
	);
};

const InputRadio = props => {
	return (
		<div className='form-group mt-3'>
			{props.options.map(option => (
				<div className='custom-control custom-radio' key={option.value}>
					<input
						className='custom-control-input'
						id={`radio-${option.value}-${props.name}`}
						type='radio'
						name={props.name}
						value={option.value}
						// eslint-disable-next-line eqeqeq
						checked={props.value == option.value}
						onChange={e => props.onChange(e.target.value)}
					/>
					<label className='custom-control-label ms-2' htmlFor='statis-hide'>
						{option.label}
					</label>
				</div>
			))}
		</div>
	);
};

const Input = props => {
	switch (props.type) {
		case 'select':
			return <InputSelect {...props} />;
		case 'checkbox':
			return <InputCheckbox {...props} />;
		case 'textarea':
			return <InputTextarea {...props} />;
		case 'file':
			return <InputFile {...props} />;
		case 'radio':
			return <InputRadio {...props} />;
		default:
			return <InputText {...props} />;
	}
};

Input.defaultProps = {
	type: 'text',
	isValid: false,
	showError: false,
};

export default Input;
