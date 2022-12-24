import React from 'react';
import styles from './Header.module.css';
import Searchbar from './Searchbar.js/Searchbar';

const Header = () => {
	return (
		<header className={`${styles.header} container`}>
			<Searchbar />
		</header>
	);
};

export default Header;
