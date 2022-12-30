import api from "./api";
import Cookies from 'js-cookie';

export default class userService {
    
    static async getUser (sortby: string, role: string) {
        const response = await api().get('/api/users', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                sortby: sortby,
                role: role
            }
        });
        return response.data;
    }

    static async editUsers (name: string, phone: string, email: string, oldPassword: string,newPassword: string) {
        const response = await api().put('/api/users', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                name : name,
                phone: phone,
                email: email,
                oldPassword:oldPassword,
                newPassword:newPassword
            }

        });
        return response.data;
    }
}