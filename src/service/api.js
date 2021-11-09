import axios from 'axios';
import { Platform } from 'react-native';

const baseURL =
    Platform.OS === 'ios'
        ? 'http://127.0.0.1:3333' // iOS
        : 'http://10.0.2.2:3333'; // Android

// const baseURL = 'https://bk.tdm-academy.com';

const api = axios.create({
    baseURL,
});

export default api;
