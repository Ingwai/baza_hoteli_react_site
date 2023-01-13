/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import Input from '../../../../components/Input/Input';
import LoadingButton from '../../../../components/UI/LoadingButton/LoadingButton';

const AddHotel = props => {
	const [form, setForm] = useState({
		name: '',
		description: '',
		city: '',
		rooms: 2,
		features: [],
		image: '',
		status: 1,
	});

	const [loading, setLoading] = useState(false);

	const submit = e => {
		e.preventDefault();
		setLoading(true);
		console.log(form);

		setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	return (
		<div className='card'>
			<div className='card-header'>Nowy hotel</div>
			<div className='card-body'>
				<p className='text-muted'>Uzupełnij dane hotelu</p>

				<form onSubmit={submit}>
					<Input
						label='Nazwa'
						value={form.name}
						onChange={value => setForm({ ...form, name: value })}
						error=''
						showError={false}
					/>

					<Input
						label='Opis'
						type="textarea"
						value={form.description}
						onChange={value => setForm({ ...form, description: value })}
						error=''
						showError={false}
					/>

					<Input
						label='Miejscowość'
						value={form.city}
						onChange={value => setForm({ ...form, city: value })}
						error=''
						showError={false}
					/>

					<Input
						label='Ilość pokoi'
						value={form.rooms}
						type='select'
						onChange={value => setForm({ ...form, rooms: value })}
						options={[
							{ value: 1, label: 1 },
							{ value: 2, label: 2 },
							{ value: 3, label: 3 },
							{ value: 4, label: 4 },
						]}
						error=''
						showError={false}
					/>

					<h5 className='mt-3'>Udogodnienia</h5>

					<Input
						type='checkbox'
						value={form.features}
						onChange={value => setForm({ ...form, features: value })}
						options={[
							{ value: 'tv', label: 'TV' },
							{ value: 'wifi', label: 'Wi-Fi' },
							{ value: 'parking', label: 'Parking' },
						]}
						error=''
						showError={false}
					/>

					<h5 className='mt-3'>Zdjęcie</h5>
					<Input type='file' onChange={value => setForm({ ...form, image: value })} />

					<h5 className='mt-3'>Status</h5>
					<Input
						type='radio'
						name='status'
						value={form.status}
						onChange={value => setForm({ ...form, status: value })}
						options={[
							{ value: '1', label: 'Aktywny' },
							{ value: '0', label: 'Ukryty' },
						]}
						error=''
						showError={false}
					/>
					<div className='text-end'>
						<LoadingButton loading={loading} className='btn btn-success'>
							Dodaj hotel!
						</LoadingButton>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddHotel;
