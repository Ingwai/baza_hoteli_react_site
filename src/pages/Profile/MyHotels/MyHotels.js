/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from '../../../axios';
import { objectToArrayWithId } from '../../../helpers/objects';
import useAuth from '../../../hooks/useAuth';

const MyHotels = props => {
	// zamiast const {url} = useRouteMatch stosujemy to co poniżej w ver 6 react-router
	const { pathname } = useLocation();
	// /---------------------------------------/
	const [hotels, setHotels] = useState([]);
	const [auth] = useAuth();

	const fetchHotels = async () => {
		try {
			const res = await axios.get('/hotels.json');
			const newHotel = objectToArrayWithId(res.data).filter(hotel => hotel.user_id === auth.userId);
			setHotels(newHotel);
		} catch (ex) {
			console.log(ex.response);
		}
	};

	const deleteHandler = async id => {
		try {
			await axios.delete(`hotels/${id}.json?auth=${auth.token}`);
			setHotels(hotels.filter(hotel => hotel.id !== id));
		} catch (ex) {
			console.log(ex.response);
		}
	};

	useEffect(() => {
		fetchHotels();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); 
	//jeśli tu umieszczamy funkcję to musimy zrobić z niej useCallback

	return (
		<div>
			{hotels ? (
				<table className='table'>
					<thead>
						<tr>
							<th>Nazwa</th>
							<th>Status</th>
							<th>Opcje</th>
						</tr>
					</thead>
					<tbody>
						{hotels.map(hotel => (
							<tr key={hotel.id}>
								<td>{hotel.name}</td>
								<td>
									{parseInt(hotel.status) === 1 ? (
										<span className='badge bg-success'>aktywny</span>
									) : (
										<span className='badge bg-secondary'>ukryty</span>
									)}
								</td>
								<td>
									<Link to={`/profil/hotele/edytuj/${hotel.id}`} className=' btn btn-warning'>
										Edytuj
									</Link>
									<button className=' btn btn-danger ms-2' onClick={() => deleteHandler(hotel.id)}>
										Usuń
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>Nie masz jeszcze żadnego hotelu</p>
			)}

			<Link to={`${pathname}/dodaj`} className='btn btn-primary'>
				Dodaj hotel
			</Link>
		</div>
	);
};

export default MyHotels;
