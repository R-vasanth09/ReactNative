import axios from "axios";

const apiclient = axios.create({
    baseURL: 'https://fakestoreapi.com', //https://fakestoreapi.com
    timeout: 1000,
    headers:{
        'Content-Type': 'application/json',
        'x-api-key':'free_user_3E9rLXQir7r4P6DpA4nFBjMKSBG'
    }
})

export default apiclient;