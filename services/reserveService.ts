import api from "./api";
import Cookies from "js-cookie";

export default class reserveService {
  static async getReservation(studentId: string) {
    const response = await api().get("/api/reservations", {
      headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
      params: {
        studentId: studentId,
      },
    });
    return response.data;
  }

  static async createReservation(date: string, time: string, courtId: string) {
    const response = await api().post(
      "/api/reservations",
      {
        date: date,
        time: time,
        courtId: courtId,
      },
      { headers: { Authorization: `Bearer ${Cookies.get("service_token")}` } }
    );

    return response.data;
  }

  static async cancelReservation(courtName: string) {
    const response = await api().delete("/api/reservations", {
      headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
      params: {
        courtName: courtName,
      },
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
