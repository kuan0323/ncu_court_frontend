import api from "./api";
import Cookies from 'js-cookie';

export default class UserService {

    static async getUser(sortby: string, role: string) {
        const response = await api().get(`/api/users?sortby=${sortby}&role=${role}`, {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },

        });
        return response.data;
    }


    static async editUsers(name: string, phone: string, email: string, oldPassword: string, newPassword: string) {
        const response = await api().put('/api/users', {

            name: name,
            phone: phone,
            email: email,
            oldPassword: oldPassword,
            newPassword: newPassword
        },
            { headers: { Authorization: `Bearer ${Cookies.get('service_token')}` } }
        );
        return response.data;
    }

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
