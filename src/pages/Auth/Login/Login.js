import React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import axios from '../../../axios-auth';
// import axiosLibrary from 'axios';

const Login = props => {
	const [auth, setAuth] = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	// const [valid, setValid] = useState(null);
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const submit = async e => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await axios.post(`accounts:signInWithPassword`, {
				email,
				password,
				returnSecureToken: true,
			});
			setAuth({
				email: res.data.email,
				token: res.data.idToken,
				userId: res.data.localId,
			});
			console.log(res);
			navigate('/');
		} catch (ex) {
			setError('Niepoprawny email lub  hasło!');
			console.log(ex.response);
			setLoading(false);
		}
	};

	if (auth) {
		navigate('/');
	}

	return (
		<div>
			<h2 className='text-center'>Logowanie</h2>
			{/* {valid === false ? <div className='alert alert-danger'>Niepoprawne dane logowania</div> : null} */}

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
				{error ? <div className='alert alert-danger'>{error}</div> : null}
				<LoadingButton loading={loading}>Zaloguj</LoadingButton>
			</form>
		</div>
	);
};

export default Login;
