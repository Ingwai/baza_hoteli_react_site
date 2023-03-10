import React from 'react';
import { Link } from 'react-router-dom';

const LastHotel = props => {
	return (
		<div className='card bg-light mb-3 mt-3'>
			<h4 className='card-header text-center text-danger'> Ostatnio oglądałeś ten hotel! Zainteresowany?</h4>
			<div className='card-body'>
				<div className='d-flex justify-content-between'>
					<h5 className='card-title'>{props.name}</h5>
					<span className='badge text-bg-light'>{props.city}</span>
				</div>
				<div style={{ width: '100px' }} className='ms-auto d-flex gap-3'>
					<Link to={`/hotels/${props.id}`} className='btn btn-sm btn-dark'>
						Tak!
					</Link>
					<button
						onClick={props.onRemove}
						className='btn btn-sm btn-dark 
                    '>
						Nie!
					</button>
				</div>
			</div>
		</div>
	);
};

export default LastHotel;
