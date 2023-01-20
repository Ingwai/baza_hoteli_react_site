import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kurs-react-tworca-default-rtdb.europe-west1.firebasedatabase.app'
});

export default instance;