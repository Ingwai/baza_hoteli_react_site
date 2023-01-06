import React, { useState, useContext, useEffect, useRef } from 'react';
import ThemeContext from '../../../../context/themeContext';
import { useNavigate } from 'react-router-dom';

const Searchbar = props => {
	const [term, setTerm] = useState('');
	const themeColor = useContext(ThemeContext);
	const inputRef = useRef(); // ref to taki odpowiednik trochę addEventListener w Reakcie.
	const history = useNavigate();

	const search = () => {
		history(`/wyszukaj/${term}`);
	};

	const onKeyDownHandler = e => {
		if (e.key === 'Enter') {
			search();
		}
	};

	const focusInput = () => {
		inputRef.current.focus(); //używając ref sprawdzamy przez current co jest aktualnie przypisane do ref (referencji)
	};

	useEffect(() => {
		focusInput();
	}, []); // useEffect zawiera 2 parametry: 1 to funkcja i to co ma się zrobić gdy komponent zostanie zamontowany lub odświeżony, a drugi parametr to tablica ze zmiennymi do śledzenia które mogą zostać odświeżone

	return (
		<div className='d-flex gap-3'>
			<input
				ref={inputRef}
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

export default Searchbar;

// css jest z bootstrapa

// można by było użyć  biblioteki reactstrap aby używać komponentów bootstrap np <Button>
// instalując wtedy npm install -save reactstrap
// aby odinstalować npm uninstall reactstrap
