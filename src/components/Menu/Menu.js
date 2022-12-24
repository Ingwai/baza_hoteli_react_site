import React from 'react';
import styles from './Menu.module.css';

const Menu = () => {
	return (
		<div className={`${styles.menuContainer} container`}>
			<ul className={styles.menu}>
				<li className={styles.menuItem}>
					<a href='#home'>Home</a>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
