import useStateStorage from '../../hooks/useStateStorage';
import { useEffect, useState } from 'react';
import useWebsiteTitle from '../../hooks/useWebsiteTittle';
import LastHotel from '../../components/Hotels/LastHotel/LastHotel';
import BestHotel from '../../components/Hotels/BestHotel/BestHotel';
import Hotels from '../../components/Hotels/Hotels';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import axios from '../../axios';
import { objectToArrayWithId } from '../../helpers/objects';

export default function Home(props) {
	const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null);
	const [loading, setLoading] = useState(true);
	const [hotels, setHotels] = useState([]);

	useWebsiteTitle('Strona główna');

	const openHotel = hotel => setLastHotel(hotel);
	const removeLastHotel = () => setLastHotel(null);

	const fetchHotels = async () => {
		try {
			const res = await axios.get('/hotels.json');
			// eslint-disable-next-line eqeqeq
			const newHotels = objectToArrayWithId(res.data).filter(hotel => hotel.status == 1);
			setHotels(newHotels);
		} catch (ex) {
			console.log(ex.response);
		}
		setLoading(false);
	};

	useEffect(() => {
		// tutaj powinno się odbywać ładowanie danych z backendu to taki odpowiednik componentDidMount()

		fetchHotels();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getBestHotel = () => {
		if (hotels.length < 2) {
			return null;
		} else {
			return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
		}
	};

	return loading ? (
		<LoadingIcon />
	) : (
		<>
			{lastHotel && <LastHotel {...lastHotel} onRemove={removeLastHotel} />}
			{getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
			<Hotels onOpen={openHotel} hotels={hotels} />
		</>
	);
}
