import React, { useEffect, useLayoutEffect } from 'react';
import { useState } from 'react';

const quotes = [
	'Nie odkładaj marzeń, odkładaj na marzenia',
	'Ten kto żyje widzi dużo, ten kto podróżuje widzi więcej.',
	'Lepiej dobrze podróżować niż dotrzeć do celu.',
	'Nawet najdalsza podróż zaczyna się od pierwszego kroku.',
];

const styles = {
	fontStyle: 'italic',
	position: 'absolute',
	margin: 'auto',
	width: 'fit-content',
	padding: '10px',
	top: '10px',
	left: 0,
	right: 0,
	textAlign: 'center',
	color: '#000',
	backgroundColor: 'rgba(255,255,255, .5)',
	backdropFilter: 'blur(1px)',
};

const InspiringQuote = props => {
	const [quote, setQuote] = useState('Wczytywanie cytatu');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// pobieranie cytatów
		setLoading(false);
	}, []);

	// zamiast useEffect w rzadkich przypadkach  można użyć
	useLayoutEffect(() => {
		// wyświetlanie cytatów
		setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	}, [loading]);
	// useEffect jest asynchroniczny a useLayoutEffect jest synchroniczny

	return <p style={styles}>{quote}</p>;
};

export default InspiringQuote;
