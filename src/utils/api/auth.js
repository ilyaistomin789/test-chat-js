import axios from '../../core/axios';


class AuthApi {
  authenticate = (data) =>
    axios.post('/authenticate', { username: data.username, password: data.password });
}

export default new AuthApi();
