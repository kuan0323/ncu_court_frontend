import axios, { AxiosInstance } from "axios"
// const cors = require('cors');
export default (): AxiosInstance => {
    return axios.create({
        baseURL: 'https://ncu-court.memery.app',
    });
}
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }
// app.use(cors(corsOptions));

  
