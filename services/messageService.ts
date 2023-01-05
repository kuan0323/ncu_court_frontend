import api from "./api";
import Cookies from "js-cookie";

export default class messageService {
  static async getMessageByCourt(courtId: string) {
    const response = await api().get("/api/messages", {
      headers: { Authorization: `Bearer ${Cookies.get("service_token")}` },
      params: {
        courtId: courtId,
      },
    });
    return response.data;
  }

  static async createMessage(courtId: string, content: string) {
    const response = await api().post(
      "/api/messages",
      {
        courtId: courtId,
        content: content,
      },
      { headers: { Authorization: `Bearer ${Cookies.get("service_token")}` } }
    );

    return response.data;
  }
}
