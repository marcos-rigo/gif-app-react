import axios from "axios";


const axiosInstance = axios.create({
    baseURL:"https://api.giphy.com/v1"
})

export default axiosInstance;