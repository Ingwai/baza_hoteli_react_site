import axios from 'axios';
const instance = axios.create({
	// baseURL: process.env.REACT_APP_DATABASE,
	baseURL: "https://kurs-react-tworca-default-rtdb.europe-west1.firebasedatabase.app"
});

export default instance;
