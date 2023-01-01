import axios, { AxiosInstance } from "axios"
// const cors = require('cors');
export default (): AxiosInstance => {
    return axios.create({
        baseURL: 'http://localhost:3005',
    });
}
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }
// app.use(cors(corsOptions));