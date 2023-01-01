import api from "./api";
import Cookies from 'js-cookie';

export default class userService {
    
    static async getUser (sortby: string, role: string) {
        const response = await api().get(`/api/users?sortby=${sortby}&role=${role}`, {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            
        });
        return response.data;
    }

    static async editUsers (name: string, phone: string, email: string, oldPassword: string,newPassword: string) {
        const response = await api().put('/api/users', {
            
                name : name,
                phone: phone,
                email: email,
                oldPassword:oldPassword,
                newPassword:newPassword
            },
        {headers: { Authorization: `Bearer ${Cookies.get('service_token')}` }}
        );
        return response.data;
    }
}