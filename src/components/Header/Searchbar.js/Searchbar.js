import React from 'react';

const Searchbar = () => {
	return (
		<div className='d-flex gap-3' >
			<input 
            // style={{ width: 'calc(100% - 20px)' }}
            className='form-control' type='text' placeholder='Szukaj...' />
			<button className='btn btn-primary'>Szukaj</button>
		</div>
	);
};

export default Searchbar;

// css jest z bootstrapa

// można by było użyć  biblioteki reactstrap aby używać komponentów bootstrap np <Button>
// instalując wtedy npm install -save reactstrap
// aby odinstalować npm uninstall reactstrap
