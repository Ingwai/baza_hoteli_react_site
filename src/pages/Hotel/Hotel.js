import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import useWebsiteTitle from '../../hooks/useWebsiteTittle';
import axios from '../../axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import kro from '../../assets/images/kro.jpg';

const Hotel = props => {
	const [auth] = useAuth();
	const { id } = useParams();
	const [hotel, setHotel] = useState(null);
	const [loading, setLoading] = useState(true);
	const [rating, setRating] = useState(0)
	const setTitle = useWebsiteTitle();
	const history = useNavigate()

	const fetchHotel = async () => {
		try {
			const res = await axios.get(`/hotels/${id}.json`);
			setHotel(res.data);
			setTitle(`Hotel - ${res.data.name}`);
		} catch (ex) {
			console.log(ex.response);
		}
		setLoading(false);
	};

	const rateHotel = async () => {
		try {
			await axios.put(`/hotels/${id}/rating.json?auth=${auth.token}`, rating);
			history('/');
		} catch (ex) {
			console.log(ex.response);
		}
	};

	useEffect(() => {
		fetchHotel();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return loading ? (
		<LoadingIcon />
	) : (
		<div className='card'>
			<div className='card-header'>
				<h1 className='text-center'>Hotel „{hotel.name}"</h1>
			</div>
			<div className='card-body'>
				<img  src={kro} alt='' className='img-fluid img-thumbnail mb-4' />
				<p>
					Miejscowość: <b>{hotel.city}</b>
				</p>
				<p>
					Miejsca: <b>{hotel.rooms}</b>
				</p>
				<p className='lead'>{hotel.description}</p>
				<p>Wyposażenie:</p>
				<ul>
					{hotel.features?.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<h4>Ocena: {hotel.rating ?? 'brak ocen'}</h4>
			</div>
			<div className='card-footer'>
				{auth ? (
					<div className='form-group row mt-4'>
						<div className='col'>
							<select
								value={rating}
								onChange={e => setRating(e.target.value)}
								className='form-control form-select-lg mb-3'>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
							</select>
						</div>
						<div className='col'>
							<button className='btn btn-info' onClick={rateHotel}>
								Oceń
							</button>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Hotel;
