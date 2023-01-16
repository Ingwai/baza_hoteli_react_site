import React, { useContext } from 'react';
import styles from './Menu.module.css';
import ThemeContext from '../../context/themeContext';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	const [auth, setAuth] = useAuth();
	const themeColor = useContext(ThemeContext);

	let activeStyle = {
		textDecoration: 'underline',
	};

	const logout = () => {
		setAuth(false);
	};

	return (
		<div className={`${styles.menuContainer}`}>
			<ul className={styles.menu}>
				<li className={styles.menuItem}>
					<NavLink
						to='/'
						style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : undefined)}
						className={`text-${themeColor.color}`}>
						Home
					</NavLink>
				</li>
				{auth ? (
					<>
						<li className={styles.menuItem}>
							<NavLink
								to='/profil'
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
								className={`text-dark`}>
								Mój profil
							</NavLink>
						</li>
						<li className={styles.menuItem}>
							<NavLink
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
								to='/zaloguj'
								onClick={logout}
								className={`text-${themeColor.color}`}>
								Wyloguj
							</NavLink>
						</li>
					</>
				) : (
					<>
						<li className={styles.menuItem}>
							<NavLink
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
								to='/rejestracja'
								className={`text-${themeColor.color}`}>
								Rejestracja
							</NavLink>
						</li>

						<li className={styles.menuItem}>
							<NavLink
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
								to='/zaloguj'
								className={`text-${themeColor.color}`}>
								Zaloguj
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</div>
	);
};

export default Menu;
