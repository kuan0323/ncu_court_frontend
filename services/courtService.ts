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

    static async getCourtByName(name: string) {
        const response = await api().get("/api/courts", {
            headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
            params: {
                name: name
            },
        });
        console.log(response.data[0])
        return response.data[0];
    }

    // photo不確定要宣告什麼型態，只有any不會跳錯
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
        //  確定有抓到值了，但payload永遠少了photo QQ
        console.log(photo);
        // return response.data;
    }

    static async editCourt(id: string, photo: any, name: string, price: string, type: string) {
        const formData = new FormData();
        formData.append("photo", photo); 
        formData.append("name", name);
        formData.append("price", price);
        formData.append("type", type);

        console.log(photo);
        const response = await api().put(`/api/courts/${id}`, {
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
    }

    // 好像用不到? 先註解掉
    // static async uploadImage(photo: any,) {
    //     const formData = new FormData();
    //     formData.append("photo", photo); // (name, attribute)
    //     const ext = photo.name.split('.')[photo.name.split('.').length - 1]
    //     const response = await api().post(`photo?ext=${ext}`, formData, {
    //         headers: {
    //             Authorization: `Bearer ${Cookies.get('service_token')}`,
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     });
    // }

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

      static async deleteMessage(id: string) {
        await api().delete(`/api/messages/${id}`, {
            headers: { Authorization: `Bearer ${Cookies.get('service_token')}` },
        },);
    }
}
