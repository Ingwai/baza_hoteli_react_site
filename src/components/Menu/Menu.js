import React, { useContext } from 'react';
import styles from './Menu.module.css';
import ThemeContext from '../../context/themeContext';
import useAuth from '../../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';

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
	let activeStyle = {
		textDecoration: 'underline',
	};

	return (
		<div className={`${styles.menuContainer}`}>
			<ul className={styles.menu}>
				<li className={styles.menuItem}>
					<NavLink
						to='/'
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						className={`text-${themeColor.color}`}>
						Home
					</NavLink>
				</li>
				{auth ? (
					<>
						<li className={styles.menuItem}>
							<NavLink
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
								to='/profil'
								className={`text-dark`}>
								Mój profil
							</NavLink>
						</li>
						<li className={styles.menuItem}>
							<a href='#login' className={`text-${themeColor.color}`} onClick={logout}>
								Wyloguj
							</a>
						</li>
					</>
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
