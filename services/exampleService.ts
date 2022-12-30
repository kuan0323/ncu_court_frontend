import api from "./api";
import Cookies from 'js-cookie';

export default class exampleService {

    static async getExample (sortby: string, role: string) {
        const response = await api().get('/api/users', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                sortby: sortby,
                role: role
            }
        });
        return response.data;
    }
}