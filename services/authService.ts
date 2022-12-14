import api from "./api";


export default class AuthService {

    static async login(studentId: string, password: string) {
        const response = await api().post('/api/auth/login', {
            studentId: studentId,
            password: password
        });
        // console.log(response);
        return response.data.serviceToken;
    }
}