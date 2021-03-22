import { DependencyContainer } from "tsyringe";
import ApiService from "../services/ApiService";

export class RootModule {
  public static init(container: DependencyContainer) {
    container.register<ApiService>(ApiService, {
      useClass: ApiService
    });
  }
}
