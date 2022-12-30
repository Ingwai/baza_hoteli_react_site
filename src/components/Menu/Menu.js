import React, { useContext } from 'react';
import styles from './Menu.module.css';
import AuthContext from '../../context/authContext';
import ThemeContext from '../../context/themeContext';

const Menu = () => {
	const auth = useContext(AuthContext);
	const themeColor = useContext(ThemeContext);

	const login = e => {
		e.preventDefault();
		auth.login();
	};

	const logout = e => {
		e.preventDefault();
		auth.logout();
	};

	return (
		<div className={`${styles.menuContainer}`}>
			<ul className={styles.menu}>
				<li className={styles.menuItem}>
					<a href='#home' className={`text-${themeColor.color}`}>
						Home
					</a>
				</li>
				{auth.isAuthenticated ? (
					<li className={styles.menuItem}>
						<a href='#login' className={`text-${themeColor.color}`} onClick={logout}>
							Wyloguj
						</a>
					</li>
				) : (
					<li className={styles.menuItem}>
						<a href='#login' className={`text-${themeColor.color}`} onClick={login}>
							Zaloguj
						</a>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Menu;
