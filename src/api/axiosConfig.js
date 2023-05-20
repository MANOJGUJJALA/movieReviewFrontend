import axios from 'axios';

export default axios.create({
    baseURL: 'https://378f-2405-201-c049-7091-2cdf-6ec7-b15b-9e45.ngrok-free.app/api/v1/movies',
    headers: {
        "ngrok-skip-browser-warning": 'true',
       
        
    },

});