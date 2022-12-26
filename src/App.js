import { Component } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/LoadingIcon/Searchbar.js/Searchbar';
import Layout from './components/layout/Layout';
import Footer from './components/Footer/Footer';
import Button from './components/UI/LoadingIcon/Button/Button';

const hotelImg = '../../../assets/images/';

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// gdy trzymam stan tylko można się pozbytć tych dwóch linijek powyższych i słowa this przed .state

	hotels = [
		{
			id: 1,
			name: 'Pod Akacjami',
			city: 'Warszawa',
			rating: 8.3,
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magnam eum dolorem voluptatibus esse, odiplaceat cum! Et iure voluptatibus sit, praesentium cupiditate molestias explicabo repudiandae earum dicta	nam illo! Pariatur tempore exercitationem dolore rem, numquam tempora aperiam debitis, quae necessitatibus nihil veniam tenetur consectetur ab! Sapiente, minima ad illum deserunt quos incidunt quaerat. Perferendi qui aspernatur a sint ipsa.',
			image: `${hotelImg}waw.jpg`,
		},

		{
			id: 2,
			name: 'Pod dębami',
			city: 'Krosno',
			rating: 8.8,
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magnam eum dolorem voluptatibus esse, odiplaceat cum! Et iure voluptatibus sit, praesentium cupiditate molestias explicabo repudiandae earum dicta	nam illo! Pariatur tempore exercitationem dolore rem, numquam tempora aperiam debitis, quae necessitatibus nihil veniam tenetur consectetur ab! Sapiente, minima ad illum deserunt quos incidunt quaerat. Perferendi qui aspernatur a sint ipsa.',
			image: `${hotelImg}kro.jpg`,
		},
	];
	// this.state = {} na:
	state = {
		// hotels: this.hotels,
		hotels: [],
		loading: true,
		themeColor: 'secondary',
	};

	searchHandler = term => {
		const hotels = [...this.hotels].filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase()));
		this.setState({ hotels });
	};

	changeThemeColor = () => {
		const newTheme = this.state.themeColor === 'primary' ? 'secondary' : 'primary';
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
		return (
			<Layout
				header={
					<Header>
						<Searchbar onSearch={term => this.searchHandler(term)} themeColor={this.state.themeColor} />
						{/* lub */}
						{/* <Searchbar onSearch={this.searchHandler} /> */}
						<Button onChange={this.changeThemeColor} />
					</Header>
				}
				menu={<Menu themeColor={this.state.themeColor} />}
				content={
					this.state.loading ? (
						<LoadingIcon themeColor={this.state.themeColor} />
					) : (
						<Hotels hotels={this.state.hotels} themeColor={this.state.themeColor} />
					)
				}
				footer={<Footer themeColor={this.state.themeColor} />}
			/>
		);
	}
}

export default App;

// instalacja sassa npm install node-sass
