import axios from 'axios';
import { API_KEY } from './key';

const instance = axios.create({
	baseURL: 'https://identitytoolkit.googleapis.com/v1/',
	params: {
	    key: `${API_KEY}`
	}
});

export default instance;
