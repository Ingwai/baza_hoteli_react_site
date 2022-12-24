import React from 'react';

const Searchbar = () => {
	return (
		<div>
			<input style={{ width: 'calc(100% - 20px)' }} className="form-control" type='text' placeholder='Szukaj...' />
			<button className='btn btn-primary'>Szukaj</button>
		</div>
	);
};

export default Searchbar;
