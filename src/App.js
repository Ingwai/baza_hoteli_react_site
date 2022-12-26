import { Component } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
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
	};

	searchHandler = term => {
		const hotels = [...this.hotels].filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase()));
		this.setState({ hotels });
	};

	componentDidMount() {
		// tutaj powinno się odbywać ładowanie danych z backendu
		setTimeout(() => {
			this.setState({ hotels: this.hotels, loading: false });
		}, 1000);
		console.log('Zamontowany');
	}

	render() {
		console.log('render');
		return (
			<div>
				<Header onSearch={this.searchHandler} />
				{/* lub */}
				{/* <Header onSearch={(term) => this.searchHandler(term)} /> */}
				<Menu />
				{this.state.loading ? <LoadingIcon /> : <Hotels hotels={this.state.hotels} />}
			</div>
		);
	}
}

export default App;

// instalacja sassa npm install node-sass
