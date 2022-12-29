import React, { Component } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/LoadingIcon/Searchbar.js/Searchbar';
import Layout from './components/layout/Layout';
import Footer from './components/Footer/Footer';
import Button from './components/UI/LoadingIcon/Button/Button';
import ThemeContext from './context/themeContext';

import waw from './assets/images/waw.jpg';
import kro from './assets/images/kro.jpg';

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// gdy trzymam stan tylko można się pozbytć tych dwóch linijek powyższych i słowa this przed .state

	static contextType = ThemeContext;
	hotels = [
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
	// this.state = {} na:
	state = {
		// hotels: this.hotels,
		hotels: [],
		loading: true,
		themeColor: 'primary',
	};

	searchHandler = term => {
		const hotels = [...this.hotels].filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase()));
		this.setState({ hotels });
	};

	changeThemeColor = () => {
		const newTheme = this.state.themeColor === 'primary' ? 'warning' : 'primary';
		this.setState({ themeColor: newTheme });
	};

	componentDidMount() {
		// tutaj powinno się odbywać ładowanie danych z backendu
		setTimeout(() => {
			this.setState({ hotels: this.hotels, loading: false });
		}, 1000);
		console.log('Zamontowany');
	}

	render() {
		const header = (
			<Header>
				<Searchbar onSearch={term => this.searchHandler(term)} />
				{/* lub */}
				{/* <Searchbar onSearch={this.searchHandler} /> */}
				<Button />
			</Header>
		);

		const content = this.state.loading ? <LoadingIcon /> : <Hotels hotels={this.state.hotels} />;

		const menu = <Menu />;

		const footer = <Footer />;

		return (
			<ThemeContext.Provider value={{ color: this.state.themeColor, changeTheme: this.changeThemeColor }}>
				<Layout header={header} menu={menu} content={content} footer={footer} />
			</ThemeContext.Provider>
		);
	}
}

export default App;

// instalacja sassa npm install node-sass
