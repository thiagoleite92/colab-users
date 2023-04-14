import axios from "axios";

export default class HttpService {
  constructor() {
    this.axios = axios.create({
      baseURL: `https://randomuser.me/api/`,
    });
  }

  async get(url = "?results=7") {
    try {
      console.log(url);

      const { data } = await this.axios({
        method: "GET",
        url: "?" + url + "&results=7",
      });

      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  }
}
