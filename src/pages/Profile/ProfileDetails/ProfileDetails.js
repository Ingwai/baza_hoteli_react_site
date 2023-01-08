import React from 'react';

const ProfileDetails = props => {
	return (
		<form>
			<div className='form-group'>
				<label>Email</label>
				<input type='email' value='abc@wp.pl' className='form-control' />
			</div>
			<div className='form-group mt-2'>
				<label>Hasło</label>
				<input type='password' placeholder='********' className='form-control' />
			</div>
			<button className='btn btn-primary mt-2'>Zapisz</button>
		</form>
	);
};

export default ProfileDetails;
