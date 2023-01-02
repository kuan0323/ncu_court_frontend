import api from "./api";
import Cookies from 'js-cookie';

export default class exampleService {

    static async getAdminUser(studentId: string) {
        const response = await api().get('/api/users', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                studentId: studentId
            }
        });
        return response.data;
    }
}