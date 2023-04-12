import axios from 'axios';

export default class HttpService {
  constructor() {
    this.axios = axios.create({
      baseURL: `https://randomuser.me/api/?nat=br`,
    });
  }

  async get() {
    return this.axios.get();
  }
}
