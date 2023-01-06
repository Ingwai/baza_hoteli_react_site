import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { reducer, initialState, init } from './reducer';
import { useReducer } from 'react';
// import { useCallback} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Searchbar from './components/UI/LoadingIcon/Searchbar.js/Searchbar';
import Layout from './components/layout/Layout';
import Footer from './components/Footer/Footer';
import Button from './components/UI/LoadingIcon/Button/Button';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import ReducerContext from './context/reducerContext';
import InspiringQuote from './components/InspiringQuote/InspiringQuote';
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';

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
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/wyszukaj/:term' element={<Search />}></Route>
				<Route path='/profil' element={<Profile />}></Route>
				<Route path='/hotels/:id' element={<Hotel />}></Route>
			</Routes>
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
