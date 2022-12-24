import React from 'react';
import styles from './Header.module.css';
import Searchbar from './Searchbar.js/Searchbar';

const Header = () => {
	return (
		<header className={styles.header}>
			<Searchbar />
		</header>
	);
};

export default Header;
