import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../../context/themeContext';

const propTypes = {
	onSearch: PropTypes.func.isRequired,
};

const Searchbar = props => {
	const [term, setTerm] = useState('');
	const themeColor = useContext(ThemeContext);

	const search = () => {
		props.onSearch(term);
	};

	const onKeyDownHandler = e => {
		if (e.key === 'Enter') {
			search();
		}
	};

	return (
		<div className='d-flex gap-3'>
			<input
				className='form-control'
				value={term}
				onKeyDown={onKeyDownHandler}
				onChange={e => setTerm(e.target.value)}
				type='text'
				placeholder='Szukaj...'
			/>
			<button className={`btn btn-${themeColor.color}`} onClick={search}>
				Szukaj
			</button>
		</div>
	);
};

Searchbar.propTypes = propTypes;

export default Searchbar;

// css jest z bootstrapa

// można by było użyć  biblioteki reactstrap aby używać komponentów bootstrap np <Button>
// instalując wtedy npm install -save reactstrap
// aby odinstalować npm uninstall reactstrap
