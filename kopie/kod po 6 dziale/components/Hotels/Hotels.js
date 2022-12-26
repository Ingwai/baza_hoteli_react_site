import React, { Component } from 'react';
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

class Hotels extends Component {
	render() {
		return (
			<div className={styles.container}>
				<h2 className={styles.title}>Oferty:</h2>
				{/* wstawianie zdjęć z katalogu public */}
				{/* <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="" /> */}
				{this.props.hotels.map(hotel => (
					<Hotel key={hotel.id} {...hotel} />
				))}
			</div>
		);
	}
}

Hotels.propTypes = propTypes;

export default Hotels;
