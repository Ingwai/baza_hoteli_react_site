import React, { useContext } from 'react';
import styles from './Menu.module.css';
import ThemeContext from '../../context/themeContext';
import useAuth from '../../hooks/useAuth';

const Menu = () => {
	const [auth, setAuth] = useAuth();
	const themeColor = useContext(ThemeContext);

	const login = e => {
		e.preventDefault();
		setAuth(true);
	};

	const logout = e => {
		e.preventDefault();
		setAuth(false);
	};

	return (
		<div className={`${styles.menuContainer}`}>
			<ul className={styles.menu}>
				<li className={styles.menuItem}>
					<a href='#home' className={`text-${themeColor.color}`}>
						Home
					</a>
				</li>
				{auth ? (
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
