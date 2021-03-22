import Axios, { AxiosInstance, Method, AxiosResponse } from "axios";
import qs from "qs";
import { injectable } from "tsyringe";
import { Endpoints } from "../misc/Endpoints";

@injectable()
export default class ApiService {
  public client: AxiosInstance;

  constructor() {
    this.client = Axios.create({
      baseURL: Endpoints.baseUrl,
      timeout: 20000
    });
  }

  public async invoke(
    method: Method = "get",
    url = "",
    params: Map<string, string> = new Map(),
    payload: any = null,
    headers: Map<string, string> = new Map()
  ): Promise<AxiosResponse<any>> {
    // set custom header if any
    headers.forEach((value: string, key: string) => {
      this.client.defaults.headers.common[key] = value;
    });

    // set auth bearer
    // client.defaults.headers.common["Authorization"] = "Bearer " + this.userData.getToken();
    return await this.client.request({
      url,
      params: qs.stringify(params),
      data: payload,
      method
    });
  }
}
