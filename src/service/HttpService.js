import axios from 'axios';

export default class HttpService {
  constructor() {
    this.axios = axios.create({
      baseURL: `https://randomuser.me/api/?nat=br&results=10`,
    });
  }

  async get() {
    try {
      const { data } = await this.axios.get();
      return data;
    } catch (error) {}
  }
}
