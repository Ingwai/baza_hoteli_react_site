import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const BestHotel = props => {
	const [time, setTime] = useState('');

	const hotel = props.getHotel();
	const endTime = moment().add(30, 'minutes').add(0, 'seconds');
	let interval = useRef(null)
		// const hotel = props.getHotel({ minHotels: 2 });

	// żeby odliczać czas zarządzać czasem i go formatować można zainstalować biblioteke
	// npm i moment

	// useEffect odpowiada componentDidMount() przy pustej tablicy lub componentDidUpdate() gdy coś jest w tablicy
	useEffect(() => {
		 interval.current = setInterval(() => {
			const leftTime = -moment().diff(endTime) / 1000;
			const minutes = Math.floor(leftTime / 60);
			const seconds = Math.floor(leftTime % 60);
			setTime(`${minutes} minut i ${seconds} s`);
		}, 1000);
		//gdy useEffect coś zwraca to tak jakbyśmy stosowali componentWillUnmount()
		return () => {
			clearInterval(interval.current);
		};
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // gdy jest pusta tablica to useEffect wykonuje się raz przy zamontowaniu komponentu

	return (
		<div className='card bg-success text-white'>
			<h4 className='card-header text-center'> Najlepsza oferta!</h4>
			<div className='card-body'>
				<div className='d-flex justify-content-between'>
					<h5 className='card-title'>{hotel.name}</h5>
					<p>Ocena: {hotel.rating}</p>
				</div>
				<p>Do końca oferty pozostało: {time}</p>
				<Link to={`/hotels/${hotel.id}`} className='btn btn-sm btn-light'>
					Pokaż
				</Link>
			</div>
		</div>
	);
};

export default BestHotel;
