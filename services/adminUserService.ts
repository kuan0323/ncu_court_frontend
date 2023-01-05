import api from "./api";
import Cookies from 'js-cookie';

export default class ExampleService {

    static async getAdminUser(studentId: string) {
        const response = await api().get('/api/users', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                studentId: studentId,
            }
        });
        return response.data;
    }

    static async getUsers(sortBy: string, role: string, keyword: string) {
        const response = await api().get('/api/users', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                sortBy: sortBy,
                role: role,
                keyword: keyword
            }
        });
        return response.data;
    }

    static async getUsers2(sortBy: string, role: string) {
        const response = await api().get('/api/users', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                sortBy: sortBy,
                role: role,
            }
        });
        return response.data;
    }

    static async delete(id: string) {

        await api().delete(`/api/users/${id}`, {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
        },);
    }
}