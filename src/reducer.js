export const initialState = {
	theme: 'primary',
	isAuthenticated: false,
};

// initState jest równy initialState ale w tej funkcji możemy zmienić np jakąś wartość zmiennej np theme na secondary
export const init = initState => {
	// initState.theme = 'secondary';
	return initState;
};

// w tym przypadku funkcja init jest nie potrzebna w reducerze

export const reducer = (state, action) => {
	switch (action.type) {
		case 'change-theme':
			const theme = state.theme === 'primary' ? 'warning' : 'primary';
			return {
				...state,
				theme: theme, //można pominąć jedno theme w tym zapisie
			};
		case 'login':
			return {
				...state,
				isAuthenticated: true,
			};
		case 'logout':
			return {
				...state,
				isAuthenticated: false,
			};
		default:
			throw new Error('Nie ma takiej akcji: ' + action.type);
	}
};
// return state;
