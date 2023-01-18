import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import useWebsiteTitle from '../../hooks/useWebsiteTittle';
import axios from '../../axios';

const Hotel = props => {
	const { id } = useParams();
	const [hotel, setHotel] = useState(null);
	const [loading, setLoading] = useState(true);
	const setTitle = useWebsiteTitle();

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

	useEffect(() => {
		fetchHotel();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return loading ? <LoadingIcon /> : <h1>Hotel: {hotel.name}</h1>;
};

export default Hotel;
