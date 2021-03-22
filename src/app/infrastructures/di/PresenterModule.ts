import { DependencyContainer } from "tsyringe";
import { UserApiRepository } from "@/app/infrastructures/repositories/Api/UserApiRepository";
import { UserPresenter } from "@/app/ui/presenters/UserPresenter";

export class PresenterModule {
  public static init(container: DependencyContainer) {
    container.register<UserPresenter>(UserPresenter, {
      useFactory: (d: any) => {
        return new UserPresenter(d.resolve(UserApiRepository));
      }
    });
  }
}
