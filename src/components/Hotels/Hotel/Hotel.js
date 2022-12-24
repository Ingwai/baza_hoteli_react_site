import React from 'react';
import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';

const Hotel = () => {
	return (
		<div className={`row ${styles.hotel}`}>
			<div className='col-4'>
				<img src={hotelImg} alt='' className='img-fluid' />
			</div>
			<div className='col-8'>Hotel</div>
		</div>
	);
};

export default Hotel;
