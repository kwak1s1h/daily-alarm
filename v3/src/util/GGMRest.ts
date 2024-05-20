import axios, {AxiosInstance, AxiosRequestConfig, isAxiosError} from "axios";
import {TeamInfoDto} from "../dto/TeamInfoDto";

export class GGMRest {
  static Instance: GGMRest;

  private accessToken;
  host: string;
  private axios: AxiosInstance;

  constructor(accessToken: string, host: string) {
    this.accessToken = accessToken;
    this.host = host;
    this.axios = axios.create({
      baseURL: `https://${host}`,
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    });
  }

  async get<T>(url: string, config?: AxiosRequestConfig) {
    try {
      const res = await axios.get(url, config);
      return res.data as T;
    }
    catch(err) {
      throw err;
    }
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const res = await axios.post(url, data, config);
      return res.data as T;
    }
    catch(err) {
      throw err;
    }
  }
}

export const Routes = {
  teamInfo(id: number) {
    return `https://${GGMRest.Instance.host}/api/team/${id}`;
  },

  allTeamInfo() {
    return `https://${GGMRest.Instance.host}/api/team/list`;
  },

  daily() {
    return `https://${GGMRest.Instance.host}/api/team/record/daily`;
  },

  serverNow() {
    return `https://${GGMRest.Instance.host}/api/server_now`;
  }
}