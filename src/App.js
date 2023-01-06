import { useEffect, useReducer } from 'react';
// import { useCallback} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/LoadingIcon/Searchbar.js/Searchbar';
import Layout from './components/layout/Layout';
import Footer from './components/Footer/Footer';
import Button from './components/UI/LoadingIcon/Button/Button';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import BestHotel from './components/Hotels/BestHotel/BestHotel';

import waw from './assets/images/waw.jpg';
import kro from './assets/images/kro.jpg';
import InspiringQuote from './components/InspiringQuote/InspiringQuote';
import LastHotel from './components/Hotels/LastHotel/LastHotel';
import useStateStorage from './hooks/useStateStorage';
import useWebsiteTitle from './hooks/useWebsiteTittle';

const hotelsArr = [
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

const initialState = {
	hotels: [],
	loading: true,
	theme: 'primary',
	isAuthenticated: false,
};

// initState jest równy initialState ale w tej funkcji możemy zmienić np jakąś wartość zmiennej np theme na secondary
const init = initState => {
	// initState.theme = 'secondary';
	return initState;
};

// w tym przypadku funkcja init jest nie potrzebna w reducerze

const reducer = (state, action) => {
	switch (action.type) {
		case 'change-theme':
			const theme = state.theme === 'primary' ? 'warning' : 'primary';
			return {
				...state,
				theme: theme, //można pominąć jedno theme w tym zapisie
			};
		case 'set-hotels':
			return {
				...state,
				hotels: action.hotels,
			};
		case 'set-loading':
			return {
				...state,
				loading: action.loading,
			};
		case 'login':
			return {
				...state,
				isAuthenticated: true,
			};
		case 'logout':
			return {
				...state,
				isAuthenticated: false,
			};
		default:
			throw new Error('Nie ma takiej akcji: ' + action.type);
	}
};
// return state;

function App() {
	// useReducer to zamiennik useState gdy mamy ich dużo, useReducer przyjmuje 3 parametry (funkcję obsługującą zmieniające się zmienne w zależności od stanu, stan inicjujący i opcjonalny 3 parametr funkcję inicjalizującą która nie występuje za często)

	const [state, dispatch] = useReducer(reducer, initialState, init);
	// state w parametrze funkcji w useReducer jest stanem aktualnym, a state po returnie to stan na który chcemy zmienić

	const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null);

	useWebsiteTitle("Strona główna");

	const searchHandler = term => {
		const newHotels = [...hotelsArr].filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase()));
		dispatch({ type: 'set-hotels', hotels: newHotels });
	};

	const getBestHotel = () => {
		if (state.hotels.length < 2) {
			return null;
		} else {
			return state.hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
		}
	};

	const openHotel = hotel => setLastHotel(hotel);

	const removeLastHotel = () => setLastHotel(null);

	// const getBestHotel = useCallback(
	// 	options => {
	// 		if (state.hotels.length < options.minHotels) {
	// 			return null;
	// 		} else {
	// 			return state.hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
	// 		}
	// 	},
	// 	[state.hotels]
	// );

	useEffect(() => {
		// tutaj powinno się odbywać ładowanie danych z backendu to taki odpowiednik componentDidMount()
		dispatch({ type: 'set-hotels', hotels: hotelsArr });
		dispatch({ type: 'set-loading', loading: false });
	}, []);

	const header = (
		<Header>
			<InspiringQuote />
			<Searchbar onSearch={term => searchHandler(term)} />
			<Button />
		</Header>
	);

	const content = state.loading ? (
		<LoadingIcon />
	) : (
		<>
			{lastHotel && <LastHotel {...lastHotel} onRemove={removeLastHotel} />}
			{getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
			<Hotels onOpen={openHotel} hotels={state.hotels} />
		</>
	);
	const menu = <Menu />;
	const footer = <Footer />;

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				login: () => dispatch({ type: 'login' }),
				logout: () => dispatch({ type: 'logout' }),
			}}>
			<ThemeContext.Provider
				value={{
					color: state.theme,
					changeTheme: () => dispatch({ type: 'change-theme' }),
				}}>
				<Layout header={header} menu={menu} content={content} footer={footer} />
			</ThemeContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;

// instalacja sassa npm install node-sass
