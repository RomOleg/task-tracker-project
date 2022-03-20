import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {"Content-type": "application/json"},
    withCredentials: true,
  });

  export default Axios;