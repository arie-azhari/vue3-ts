import { UserRepositoryInterface } from "@/data/persistences/repositories/contracts/UserRepositoryInterface";
import { UserDataMapper } from "@/data/persistences/mappers/UserDataMapper";
import { Endpoints } from "@/app/infrastructures/misc/Endpoints";
import ApiService from "@/app/infrastructures/services/ApiService";
import { IUsers } from "@/entities/User";

export class UserApiRepository implements UserRepositoryInterface {
  private apiService: ApiService;
  private mapper: UserDataMapper;
  private endpoints: Endpoints;

  constructor(
    apiService: ApiService,
    mapper: UserDataMapper,
    endpoints: Endpoints
  ) {
    this.apiService = apiService;
    this.mapper = mapper;
    this.endpoints = endpoints;
  }

  public async getAllUsers(): Promise<IUsers[]> {
    const dataResponse = await this.apiService.invoke(
      "get",
      this.endpoints.user()
    );
    return this.mapper.convertUsersDataFromApi(dataResponse);
  }
}
