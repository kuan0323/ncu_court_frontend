import api from "./api";
import Cookies from 'js-cookie';


export default class UserService {

    static async register(name: string, studentId: string, email: string, phone: string, password: string) {
        const response = await api().post('/api/register', {
            name: name,
            studentId: studentId,
            email: email,
            phone: phone,
            password: password
        });
        // return response.status;
        return response.data;
    }


    // 
    static async login(name: string, studentId: string, email: string, phone: string, password: string) {
        const response = await api().post('/api/auth/login', {
            name: name,
            studentId: studentId,
            email: email,
            phone: phone,
            password: password
        });
        return response.data.serviceToken;
    }


}
