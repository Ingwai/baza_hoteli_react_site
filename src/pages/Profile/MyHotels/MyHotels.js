import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const MyHotels = props => {

	// zamiast const {url} = useRouteMatch stosujemy to co poniżej v ver 6 react-router
	
	const {pathname} = useLocation()
	return (
		<div>
			<p>Nie masz jeszcze żadnego hotelu</p>
			<Link to={`${pathname}/dodaj`} className='btn btn-primary'>Dodaj hotel</Link>
		</div>
	);
};

export default MyHotels;
