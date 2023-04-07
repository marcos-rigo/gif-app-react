import axios from "axios";


export const axiosInstance = axios.create({
    baseURL:"https://api.giphy.com/v1"
})

export const axiosBack = axios.create({
    baseURL:"http://localhost:3008"
})

