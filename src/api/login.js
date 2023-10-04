import axios from 'axios';
import { setToken } from 'utils/token';

async function loginRequest(username, password) {

    return axios.request({
        url: 'http://127.0.0.1:8000/auth-token/',
        data:{
            username: username,
            password: password
        },
        withCredentials: true,
        method: 'POST',
    })
    .then(response => {
        if (!response.data.token) {
            return false;
        }
        setToken(response.data.token);
        return true;
    })
    .catch(error =>{
        return false
    });
}


export default loginRequest;
