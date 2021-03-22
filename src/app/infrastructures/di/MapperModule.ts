import { DependencyContainer } from "tsyringe";
import { UserDataMapper } from "@/data/persistences/mappers/UserDataMapper";

export class MapperModule {
  public static init(container: DependencyContainer) {
    container.register<UserDataMapper>(UserDataMapper, {
      useClass: UserDataMapper
    });
  }
}
