import api from "./api";
import Cookies from 'js-cookie';

export default class reserveService {

    static async getReservation(studentId: string ,status:string) {
        const response = await api().get('/api/reservations', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                studentId: studentId,
                status :status
            }

        });
        return response.data;
    };

    static async cancelReservation(courtName :string) {
        const response = await api().delete('/api/reservations', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                courtName:courtName
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