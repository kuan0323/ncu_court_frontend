import api from "./api";
import Cookies from "js-cookie";

export default class courtService {

    static async getCourt() {
        const response = await api().get("/api/courts", {
          headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
          params: {},
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
    }

    static async editCourt( photo:string, name: string, price: string, type: string ) {
        const response = await api().post('/api/courts', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                photo: photo,
                name: name,
                price: price,
                type: type
            }
        });
    }

    static async deleteCourt(id: string) {
        await api().delete(`/api/courts/${id}`, {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
        },);
    }

    static async getUsers(keyword: string) {
        const response = await api().get('/api/users', {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
            params: {
                keyword: keyword
            }
        });
        console.log(response.data[0].id);
        return response.data[0].id;
    }

    static async getReservationByName(id: string) {
        const response = await api().get('/api/reservations', {
            headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
            params: {
                userId: id
            },
          });
        console.log(response.data);
        return response.data;
    }

    static async getReservation() {
        const response = await api().get('/api/reservations', {
          headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
          params: {
          },
        });
        return response.data;

      }

    static async deleteReservation(id: string) {
        await api().delete(`/api/reservations/${id}`, {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
        },);
    }

    static async getMessageByCourt(courtId: string) {
        const response = await api().get("/api/messages", {
          headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
          params: {
            courtId: courtId
          },
        });
        console.log(response.data);
        return response.data;
      }

      static async getCourtByType(type: string) {
        const response = await api().get("/api/courts", {
          headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
          params: {
            type: type,
          },
        });
        return response.data;
      }
}
