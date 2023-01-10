import React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';

const Login = props => {
	const [auth, setAuth] = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [valid, setValid] = useState(null);
	const navigate = useNavigate();

	const submit = e => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			// Logowanie
			if (true) {
				setAuth(true);
				navigate('/');
			} else {
				setValid(false);
				setPassword('');
			}
			setLoading(false);
		}, 500);
	};

	return (
		<div>
			<h2 className='text-center'>Logowanie</h2>
			{valid === false ? <div className='alert alert-danger'>Niepoprawne dane logowania</div> : null}
		
			<form onSubmit={submit}>
				<div className='form-group'>
					<label>Email</label>
					<input type='email' className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
				</div>
				<div className='form-group mt-2'>
					<label>Hasło</label>
					<input
						type='password'
						className='form-control'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<LoadingButton loading={loading}>Zaloguj</LoadingButton>
			</form>
		</div>
	);
};

export default Login;
