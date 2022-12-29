import axios, { AxiosInstance } from "axios"

export default (): AxiosInstance => {
    return axios.create({
        baseURL: 'http://localhost:3005'
    });
}