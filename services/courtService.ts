import api from "./api";
import Cookies from "js-cookie";

export default class courtService {
  static async searchByDate(sortby: string, role: string) {
    const response = await api().get("/api/users", {
      headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
      params: {
        sortby: sortby,
        role: role,
      },
    });
    return response.data;
  }

  static async searchByName(sortby: string, role: string, name: string) {
    const response = await api().get("/api/users", {
      headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
      params: {
        sortby: sortby,
        role: role,
        name: name,
      },
    });
    return response.data;
  }

  static async getCourt() {
    const response = await api().get("/api/courts", {
      headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
      params: {},
    });
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

  static async getReservation() {
    const response = await api().get("/api/reservations", {
      headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
      params: {},
    });
    return response.data;
  }
}
