import AuthContext from '../context/authContext';
import { useContext, useDebugValue } from 'react';

function useAuth() {
	const authContext = useContext(AuthContext);
	const auth = authContext.user;

	useDebugValue(auth ? 'Zalogowany' : 'Wylogowany'); //stosować w niektórych tylko hookach jeśli potrzeba

	const setAuth = user => {
		if (user) {
			authContext.login(user);
			localStorage.setItem('token-data', JSON.stringify(user));
		} else {
			authContext.logout();
			localStorage.removeItem('token-data');
		}
	};
	return [auth, setAuth];
}

export default useAuth;
