import AuthContext from '../context/authContext';
import { useContext, useDebugValue } from 'react';

function useAuth() {
	const authContext = useContext(AuthContext);
	const auth = authContext.isAuthenticated;

	useDebugValue(auth ? 'Zalogowany' : 'Wylogowany'); //stosować w niektórych tylko hookach jeśli potrzeba

	const setAuth = (isAuthenticated, tokenData = null) => {
		if (isAuthenticated) {
			authContext.login();
			if (tokenData) {
				localStorage.setItem('token-data', JSON.stringify(tokenData));
			} else {
				authContext.logout();
				if (tokenData) {
					localStorage.removeItem('token-data');
				}
			}
		}
	};
	return [auth, setAuth];
}

export default useAuth;
