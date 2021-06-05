import axios from "axios";

export const api = axios.create({
  headers: {
    'Content-type': 'application/json'
  },
  baseURL: 'http://195.245.112.165:83/api/',
  responseType: 'json'
})