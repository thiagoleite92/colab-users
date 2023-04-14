import axios from "axios";

export default class HttpService {
  constructor() {
    this.axios = axios.create({
      baseURL: `https://randomuser.me/api/`,
    });
  }

  async get(url = "results=14") {
    try {
      const { data } = await this.axios({
        method: "GET",
        url: "?" + url,
      });

      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  }
}
