import axios from 'axios';

export default class HttpService {
  constructor() {
    this.axios = axios.create({
      baseURL: `https://randomuser.me/api/?nat=br`,
    });
  }

  get() {
    return this.axios.get();
  }
}
