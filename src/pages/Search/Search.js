import { useParams } from 'react-router-dom';

export default function Search(props) {
	// const searchHandler = term => {
	const { term } = useParams();
	// const newHotels = [...hotelsArr].filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase()));
	// };
	return (
		<div>
			Wyniki dla frazy: "{term}"
		</div>
	);
}
