import React from 'react';
import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';

const Hotel = () => {
	return (
		<div className={`card ${styles.hotel}`}>
			<div className='card-body'>
				<div className='row'>
					<div className='col-4'>
						<img src={hotelImg} alt='' className='img-fluid img-thumbnail' />
					</div>
					<div className='col-8'>
						<div className='row'>
							<div className='col'>
								<p className={styles.title}>Pensjonat</p>
								<span className='badge text-bg-light'>Warszawa</span>
							</div>
							<div className='col'>
								<h5>Ocena: 8.3</h5>
								<a href='#hotel' className='btn btn-secondary mt-2 px-5 text-uppercase'>
									Pokaż
								</a>
							</div>
						</div>
					</div>
					<div className='col-12'>
						<p className={styles.description}>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magnam eum dolorem voluptatibus esse, odio
							placeat cum! Et iure voluptatibus sit, praesentium cupiditate molestias explicabo repudiandae earum dicta
							nam illo! Pariatur tempore exercitationem dolore rem, numquam tempora aperiam debitis, quae necessitatibus
							nihil veniam tenetur consectetur ab! Sapiente, minima ad illum deserunt quos incidunt quaerat. Perferendis
							qui aspernatur a sint ipsa.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hotel;
