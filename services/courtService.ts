import api from "./api";
import Cookies from 'js-cookie';

export default class courtService {


    static async getCourt() {
        const response = await api().get('/api/courts', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {

            }
        });
        console.log(response.data);
        return response.data;
    }

    static async createCourt(photo: any, name: string, price: string, type: string) {
        const formData = new FormData();
        formData.append("photo", photo); // (name, value)
        formData.append("name", name);
        formData.append("price", price);
        formData.append("type", type);

        console.log(photo);
        const response = await api().post('/api/courts', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                photo: photo,
                name: name,
                price: price,
                type: type
            },
            body: {
                data: formData
            }
        });
        console.log(photo);
        // return response.data;
    }

    static async uploadImage(photo: any,) {
        const formData = new FormData();
        formData.append("photo", photo); // (name, attribute)
        const ext = photo.name.split('.')[photo.name.split('.').length - 1]
        const response = await api().post(`photo?ext=${ext}`, formData, {
            headers: {
                Authorization: `Bearer ${Cookies.get('service_token')}`,
                'Content-Type': 'multipart/form-data'
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

