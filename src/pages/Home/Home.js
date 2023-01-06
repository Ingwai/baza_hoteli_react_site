import useStateStorage from '../../hooks/useStateStorage';
import { useEffect, useState } from 'react';
import useWebsiteTitle from '../../hooks/useWebsiteTittle';
import LastHotel from '../../components/Hotels/LastHotel/LastHotel';
import BestHotel from '../../components/Hotels/BestHotel/BestHotel';
import Hotels from '../../components/Hotels/Hotels';
import waw from '../../assets/images/waw.jpg';
import kro from '../../assets/images/kro.jpg';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';

export const hotelsArr = [
	{
		id: 1,
		name: 'Pod Akacjami',
		city: 'Warszawa',
		rating: 8.3,
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magnam eum dolorem voluptatibus esse, odiplaceat cum! Et iure voluptatibus sit, praesentium cupiditate molestias explicabo repudiandae earum dicta	nam illo! Pariatur tempore exercitationem dolore rem, numquam tempora aperiam debitis, quae necessitatibus nihil veniam tenetur consectetur ab! Sapiente, minima ad illum deserunt quos incidunt quaerat. Perferendi qui aspernatur a sint ipsa.',
		image: { img: waw },
	},

	{
		id: 2,
		name: 'Pod dębami',
		city: 'Krosno',
		rating: 8.8,
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magnam eum dolorem voluptatibus esse, odiplaceat cum! Et iure voluptatibus sit, praesentium cupiditate molestias explicabo repudiandae earum dicta	nam illo! Pariatur tempore exercitationem dolore rem, numquam tempora aperiam debitis, quae necessitatibus nihil veniam tenetur consectetur ab! Sapiente, minima ad illum deserunt quos incidunt quaerat. Perferendi qui aspernatur a sint ipsa.',
		image: { img: kro },
	},
];

export default function Home(props) {
	const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null);
	const [loading, setLoading] = useState(true);
	const [hotels, setHotels] = useState([]);

	useWebsiteTitle('Strona główna');

	useEffect(() => {
		// tutaj powinno się odbywać ładowanie danych z backendu to taki odpowiednik componentDidMount()
		setTimeout(() => {
			setHotels(hotelsArr);
			setLoading(false);
		}, 500);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getBestHotel = () => {
		if (hotels.length < 2) {
			return null;
		} else {
			return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
		}
	};

	const openHotel = hotel => setLastHotel(hotel);
	const removeLastHotel = () => setLastHotel(null);

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
