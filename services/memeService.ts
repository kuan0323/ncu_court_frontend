import api from "./api";
import Cookies from 'js-cookie';

export default class MemeService {

    static async getMemes () {
        const response = await api().get('/api/memes', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` }
        });
        return response.data;
    }

}