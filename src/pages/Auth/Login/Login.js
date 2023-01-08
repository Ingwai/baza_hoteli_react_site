import React from 'react';

const Login = props => {
	return (
		<div>
			<h2 className='text-center'>Logowanie</h2>

			<form>
				<div className='form-group'>
					<label>Email</label>
					<input type='email' className='form-control' />
				</div>
				<div className='form-group mt-2'>
					<label>Hasło</label>
					<input type='password' className='form-control' />
				</div>
				<button className='btn btn-primary mt-2'>Zapisz</button>
			</form>
		</div>
	);
};

export default Login;
