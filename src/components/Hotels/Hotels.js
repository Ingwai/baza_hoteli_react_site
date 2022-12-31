import React from 'react';
// import { useMemo } from 'react';
// import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

const propTypes = {
	// hotels: PropTypes.arrayOf(
	// 	PropTypes.shape({
	// 		name: PropTypes.string.isRequired,
	// 		city: PropTypes.string.isRequired,
	// 		rating: PropTypes.number.isRequired,
	// 		description: PropTypes.string.isRequired,
	// 	})
	// ).isRequired,
	hotels: PropTypes.array.isRequired,
};

// żeby nie renderować zawartość w komponentach funkcyjnych używamy hooka useMemo

// przykład do pokaqzania useMemo.
// const slowFunction = count => {
// 	for (let i = 0; i < 1200000000; i++) return count;
// };

const Hotels = props => {
	// const count = useMemo(() => {
	// 	return slowFunction(props.hotels.length);
	// }, [props.hotels.length]);
	const count = props.hotels.length;
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Oferty ({count}):</h2>
			{/* wstawianie zdjęć z katalogu public */}
			{/* <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="" /> */}
			{props.hotels.map(hotel => (
				<Hotel key={hotel.id} {...hotel} />
			))}
		</div>
	);
};

Hotels.propTypes = propTypes;

const areEqual = (prevProps, nextProps) => {
	return prevProps.hotels === nextProps.hotels;
};

export default React.memo(Hotels, areEqual);

// class Hotels extends PureComponent {

// 	componentDidUpdate() {
// 		console.log('update');
// 	}

// 	// żeby komponent nie renderował sie za każdym razem gdy coś jest kliknięte używamy w klasowym komponenice takiej metody żeby temu zapobiec

// 	// shouldComponentUpdate(nextProps, nextState) {
// 	// 	return this.props.hotels === nextProps.hotels ? false : true;
// 	// }
// 	// tą metodę można zastąpić reaktowym PureComponent wtedy sam reakt sam zarządza renderowaniem

// 	render() {
// 		return (
// 			<div className={styles.container}>
// 				<h2 className={styles.title}>Oferty:</h2>
// 				{/* wstawianie zdjęć z katalogu public */}
// 				{/* <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="" /> */}
// 				{this.props.hotels.map(hotel => (
// 					<Hotel key={hotel.id} {...hotel} />
// 				))}
// 			</div>
// 		);
// 	}
// }
