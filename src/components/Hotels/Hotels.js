import React, { Component } from 'react';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

class Hotels extends Component {
	render() {
		return (
			<div className={styles.container}>
				<h2 className={styles.title}>Oferty:</h2>
				{/* wstawianie zdjęć z katalogu public */}
				{/* <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="" /> */}
				<Hotel />
				<Hotel />
			</div>
		);
	}
}

export default Hotels;
