import PropTypes from 'prop-types';
import React from 'react';
import styles from './Hotel.module.css';
import ThemeContext from '../../../context/themeContext';
import { useContext } from 'react';
const propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	// missing: PropTypes.string.isRequired,
};

const Hotel = props => {
	const themeColor = useContext(ThemeContext);

	return (
		<div className={`card ${styles.hotel}`}>
			<div className='card-body'>
				<div className='row'>
					<div className='col-4'>
						{/* {props.missing} */}
						<img src={props.image.img} alt='hotel' className='img-fluid img-thumbnail' />
					</div>
					<div className='col-8'>
						<div className='row'>
							<div className='col'>
								<p className={styles.title}>{props.name}</p>
								<span className='badge text-bg-light'>{props.city}</span>
							</div>
							<div className='col'>
								<h5>Ocena: {props.rating}</h5>
								<a href='#hotel' className={`btn btn-${themeColor.color} mt-2 px-5 text-uppercase`}>
									Pokaż
								</a>
							</div>
						</div>
					</div>
					<div className='col-12'>
						<p className={styles.description}>{props.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Hotel.propTypes = propTypes;
// Hotel.defaultProps = defaultProps;

export default Hotel;
