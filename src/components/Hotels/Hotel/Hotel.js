import PropTypes from 'prop-types';
import React from 'react';
import styles from './Hotel.module.css';
import ThemeContext from '../../../context/themeContext';
import { useContext } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
// import waw from '../../assets/images/waw.jpg';
// import kro from '../../../assets/images/kro.jpg';
const propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	rating: PropTypes.number,
	description: PropTypes.string.isRequired,
	// missing: PropTypes.string.isRequired,
};

const Hotel = props => {
	const themeColor = useContext(ThemeContext);
	const [auth] = useAuth();

	const openHotelHandler = e => {
		// e.preventDefault();
		if (props.onOpen) {
			props.onOpen(props);
		}
	};

	return (
		<div className={`card ${styles.hotel}`}>
			<div className='card-body'>
				<div className='row'>
					<div className='col-4'>
						{/* {props.missing} */}
						<img
							src={`https://placeimg.com/220/18${Math.floor(Math.random() * 10)}/arch`}
							alt='hotel'
							className='img-fluid img-thumbnail'
						/>
					</div>
					<div className='col-8'>
						<div className='row'>
							<div className='col'>
								<p className={styles.title}>{props.name}</p>
								<span className='badge text-bg-light'>{props.city}</span>
							</div>
							<div className='col'>
								<h5>Ocena: {props.rating ?? 0}</h5>
								<Link
									to={`/hotels/${props.id}`}
									onClick={openHotelHandler}
									className={`btn btn-${themeColor.color} mt-2 px-5 text-uppercase`}>
									Pokaż
								</Link>
								{/* <a
									href='/hotel/id'
									onClick={openHotelHandler}
									className={`btn btn-${themeColor.color} mt-2 px-5 text-uppercase`}>
									Pokaż
								</a> */}
							</div>
						</div>
					</div>
					<div className='col-12'>
						<p className={styles.description}>{props.description}</p>

						{auth ? (
							<p className='mt-2'>Dostępność: {props.rooms} pokoje</p>
						) : (
							<p className='mt-2'>Żeby sprawdzić dostępność zaloguj się.</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

Hotel.propTypes = propTypes;
// Hotel.defaultProps = defaultProps;

export default Hotel;
