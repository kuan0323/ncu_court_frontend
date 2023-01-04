import api from "./api";
import Cookies from 'js-cookie';

export default class reserveService {

    static async getReservation() {
        const response = await api().get('/api/reservations', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
        });
        return response.data;
    };

    static async cancelReservation(courtId: string) {
        const response = await api().delete('/api/reservations', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                courtId: courtId
            }
        });
        return response.data;
    }
    // static async getPicture(courtName :string) {
    //     const response = await api().get('/api/courts', {
    //         headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
    //         params: {
    //             courtName:courtName
    //         }
    //     });
    //     return response.data.photo;
    // }

}