import React, { useEffect } from 'react';
import { useState } from 'react';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import { validateEmail } from '../../../helpers/validations';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../axios-auth';

const ProfileDetails = props => {
	const [auth, setAuth] = useAuth();
	const [email, setEmail] = useState(auth.email);
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({ email: '', password: '' });
	const [success, setSuccess] = useState(false);
	let buttonDisabled = Object.values(errors).filter(error => error).length;

	const submit = async e => {
		e.preventDefault();
		setLoading(true);

		try {
			const data = {
				idToken: auth.token,
				email: email,
				returnSecureToken: true,
			};

			if (password) {
				data.password = password;
			}

			const res = await axios.post('accounts:update', data);
			setAuth({
				email: res.data.email,
				token: res.data.idToken,
				userId: res.data.localId,
			});
			setSuccess(true);
		} catch (ex) {
			console.log(ex.response);
		}
		setLoading(false);
	};

	useEffect(() => {
		if (validateEmail(email)) {
			setErrors({ ...errors, email: '' });
		} else {
			setErrors({ ...errors, email: 'Niepoprawny e-mail' });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [email]);

	useEffect(() => {
		if (password.length >= 4 || !password) {
			setErrors({ ...errors, password: '' });
		} else {
			setErrors({ ...errors, password: 'Wymagane 4 znaki' });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [password]);

	return (
		<form onSubmit={submit}>
			{success ? <div className='alert alert-success'>Dane zostały zapisane</div> : null}
			<div className='form-group'>
				<label>Email</label>
				<input
					type='email'
					className={`form-control ${errors.email ? 'is-invalid' : 'is-valid'}`}
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<div className='invalid-feedback'>{errors.email}</div>
				<div className='valid-feedback'>Wszystko gra</div>
			</div>
			<div className='form-group mt-2'>
				<label>Hasło</label>
				<input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					className={`form-control ${errors.password ? 'is-invalid' : ''}`}
				/>
				<div className='invalid-feedback'>{errors.password}</div>
			</div>
			<LoadingButton loading={loading} disabled={buttonDisabled}>
				Zapisz
			</LoadingButton>
		</form>
	);
};

export default ProfileDetails;
