import { useParams } from 'react-router-dom';
import { objectToArrayWithId } from '../../helpers/objects';
import axios from '../../axios';
import { useEffect, useState } from 'react';
import Hotels from '../../components/Hotels/Hotels';

export default function Search(props) {
	// const searchHandler = term => {
	const { term } = useParams();
	const [hotels, setHotels] = useState([]);

	const search = async () => {
		try {
			const res = await axios.get('/hotels.json');
			const newHotels = objectToArrayWithId(res.data).filter(hotel => hotel.name.includes(term));
			setHotels(newHotels);
		} catch (ex) {
			console.log(ex.response);
		}
	};

	useEffect(() => {
		search();
	}, [term]);

	return (
		<div>
			<h3> Wyniki dla frazy "{term}":</h3>
			<Hotels hotels={hotels} />;
		</div>
	);
}
