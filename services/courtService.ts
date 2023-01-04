import api from "./api";
import Cookies from 'js-cookie';

export default class courtService {


    static async getCourt() {
        const response = await api().get('/api/courts', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                
            }
        });
        return response.data;
    }

    static async createCourt( photo:string, name: string, price: string, type: string ) {
        const response = await api().post('/api/courts', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                photo: photo,
                name: name,
                price: price,
                type: type
            }
        });
        return response.data;
    }

    static async getReservaiton(userId: string) {
        const response = await api().get('/api/reservations', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                userId: userId
            }
        });
        return response.data;
    }
}

