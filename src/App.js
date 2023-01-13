import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { reducer, initialState, init } from './reducer';
import { useReducer, lazy, Suspense } from 'react';
// import { useCallback} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Searchbar from './components/UI/Searchbar.js/Searchbar';
import Layout from './components/layout/Layout';
import Footer from './components/Footer/Footer';
import Button from './components/UI/Button/Button';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import ReducerContext from './context/reducerContext';
import InspiringQuote from './components/InspiringQuote/InspiringQuote';
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import Search from './pages/Search/Search';
import ProfileDetails from './pages/Profile/ProfileDetails/ProfileDetails';
import MyHotels from './pages/Profile/MyHotels/MyHotels';
import PageNotFound from './pages/NotFound/PageNotFound';
import Login from './pages/Auth/Login/Login';
import ErrorBoundary from './hoc/ErrorBoundary';
import AddHotel from './pages/Profile/MyHotels/AddHotel/AddHotel';

const Profile = lazy(() => import('./pages/Profile/Profile'));

function App() {
	// useReducer to zamiennik useState gdy mamy ich dużo, useReducer przyjmuje 3 parametry (funkcję obsługującą zmieniające się zmienne w zależności od stanu, stan inicjujący i opcjonalny 3 parametr funkcję inicjalizującą która nie występuje za często)

	const [state, dispatch] = useReducer(reducer, initialState, init);
	// state w parametrze funkcji w useReducer jest stanem aktualnym, a state po returnie to stan na który chcemy zmienić

	const header = (
		<Header>
			<InspiringQuote />
			<Searchbar />
			<Button />
		</Header>
	);

	const content = (
		<div>
			<ErrorBoundary>
				<Suspense fallback={<p>Ładowanie...</p>}>
					{/* Suspense można użyć przy wczytwaniu danych np przy lazy ładowaniu */}
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/wyszukaj' element={<Search />}>
							<Route path=':term' element={<Search />} />
							<Route path='' element={<Search />} />
						</Route>
						<Route path='/profil' element={state.isAuthenticated ? <Profile /> : <Navigate to='/zaloguj' />}>
							{/* w Profile.js umieszczamy <Outlet/> żeby się odnosił do tego rodzica */}
							<Route path='' element={<ProfileDetails />} />
							<Route path='hotele' element={<MyHotels />} />
						</Route>

							<Route path='/profil/hotele/dodaj' element={<AddHotel />}></Route>
						<Route path='/hotels/:id' element={<Hotel />}></Route>

						<Route path='/zaloguj' element={<Login />}></Route>
						<Route path='*' element={<PageNotFound />}></Route>
						{/* nie istniejące strony */}
					</Routes>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
	const menu = <Menu />;
	const footer = <Footer />;

	return (
		<Router>
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
					<ReducerContext.Provider
						value={{
							state: state,
							dispatch: dispatch,
						}}>
						<Layout header={header} menu={menu} content={content} footer={footer} />
					</ReducerContext.Provider>
				</ThemeContext.Provider>
			</AuthContext.Provider>
		</Router>
	);
}

export default App;

// instalacja sassa npm install node-sass
