import AuthContext from '../context/authContext';
import { useContext, useDebugValue } from 'react';

function useAuth() {
	const authContext = useContext(AuthContext);
	const auth = authContext.isAuthenticated;

	useDebugValue(auth ? 'Zalogowany' : 'Wylogowany'); //stosować w niektórych tylko hookach jeśli potrzeba 

	const setAuth = value => {
		if (value) {
			authContext.login();
		} else {
			authContext.logout();
		}
	};
	return [auth, setAuth];
}
export default useAuth;
