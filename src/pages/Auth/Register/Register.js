import React, { useState } from 'react';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import { validate } from '../../../helpers/validations';
import Input from '../../../components/Input/Input';
// import axios from '../../../axios';
import axiosLibrary from 'axios';
import { API_KEY } from '../../../key';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Register = props => {
	const history = useNavigate();
	const [auth, setAuth] = useAuth();
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		email: { value: '', error: '', showError: false, rules: ['required', 'email'] },

		password: { value: '', error: '', showError: false, rules: ['required', { rule: 'min', length: 4 }] },
	});

	const valid = !Object.values(form)
		.map(input => input.error)
		.filter(error => error).length;

	const empty = form.email.value === '' || form.password.value === '' ? true : false;

	const submit = async e => {
		e.preventDefault();
		setLoading(true);
		try {
			//axios.post wysyłanie
			const res = await axiosLibrary.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
				email: form.email.value,
				password: form.password.value,
				returnSecureToken: true,
			});
			setAuth(true, res.data);
			history('/');
		} catch (ex) {
			console.log(ex.response);
		}

		//axios.get pobieranie
		// const res = await axios.get('users.json');
		// console.log(res.data);

		//fetch
		// const res = await fetch('https://kurs-react-tworca-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
		// 	// method: 'POST',
		// 	headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		// 	// body: JSON.stringify({ email: 'test@email.com', password: 'tajne123' }),
		// });

		// //POST - wysyłanie danych
		// //GET- pobieranie jest onw fetchu usawiony automatycznie
		// const content = await res.json();
		// console.log(content);

		setLoading(false);
	};

	const changeHandler = (value, fieldName) => {
		const error = validate(form[fieldName].rules, value);

		setForm({ ...form, [fieldName]: { ...form[fieldName], value, error: error, showError: true } });
	};

	if (auth) {
		history('/');
	}

	return (
		<div className='card'>
			<div className='card-header'>Rejestracja</div>
			<div className='card-body'>
				<p className='text-muted'>Uzupełnij dane</p>

				<form onSubmit={submit}>
					<Input
						label='Email'
						type='email'
						value={form.email.value}
						onChange={val => changeHandler(val, 'email')}
						error={form.email.error}
						showError={form.email.showError}
					/>

					<Input
						label='Hasło'
						type='password'
						value={form.password.value}
						onChange={val => changeHandler(val, 'password')}
						error={form.password.error}
						showError={form.password.showError}
					/>

					<div className='text-end mt-3'>
						<LoadingButton loading={loading} disabled={!valid || empty} className='btn btn-success'>
							Gotowe!
						</LoadingButton>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
