import { IUsers } from "@/entities/User";
import { AxiosResponse } from "axios";

export class UserDataMapper {
  public convertUsersDataFromApi(result: AxiosResponse<any>): IUsers[] {
    const { data } = result;
    console.log("Data", data);
    return data.map((e: any) => new IUsers(e.id, e.name, e.username));
  }
}
