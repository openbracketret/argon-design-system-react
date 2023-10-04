import axios from 'axios';


function LoginRequest(username, password) {

    axios.request({
        url: 'http://127.0.0.1:8000/auth-token/',
        data:{
            username: username,
            password: password
        },
        withCredentials: true,
        method: 'POST',
    })
    .then(response => {
        alert("FUCK YES BITCH");
        return response;
    })
    .catch(error =>{
        alert(error);
    });

}

export default LoginRequest;
