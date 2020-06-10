import axios from 'axios'

const LOGIN_API_URL = 'http://localhost:8080/Help_Desk/login';
const LOGOUT_API_URL = 'http://localhost:8080/Help_Desk/loggout';


class LoginService {

    login(data) {
        return axios.post(LOGIN_API_URL, {
              email: data.email,
              password: data.password})
          .then(response => {return response})
          .catch(error => {   
            alert('Please make sure you are using a valid email or password')
            return error
        });
    }

    logout(user) {
        return axios.post(LOGOUT_API_URL,
            {
                withCredentials: true,
                headers: {
                    "Authorization" : `Bearer ${user.jwt}`,
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }
            ).then(response => {return response})
            .catch(error => {   
                alert('Unable to logout')
                return Promise.reject(error)
            });
    }
}

export default new LoginService()