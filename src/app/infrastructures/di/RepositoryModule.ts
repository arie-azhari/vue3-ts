import { DependencyContainer } from "tsyringe";
import ApiService from "../services/ApiService";
import { Endpoints } from "@/app/infrastructures/misc/Endpoints";

import { UserDataMapper } from "@/data/persistences/mappers/UserDataMapper";
import { UserApiRepository } from "@/app/infrastructures/repositories/Api/UserApiRepository";

export class RepositoryModule {
  public static init(container: DependencyContainer) {
    container.register<UserApiRepository>(UserApiRepository, {
      useFactory: (d: any) => {
        return new UserApiRepository(
          d.resolve(ApiService),
          d.resolve(UserDataMapper),
          d.resolve(Endpoints)
        );
      }
    });
  }
}
