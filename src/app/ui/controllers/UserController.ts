import { container } from "tsyringe";
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store";
import { UserPresenter } from "@/app/ui/presenters/UserPresenter";
import { IUsers } from "@/entities/User";

export interface UserState {
  userList: IUsers[];
}

@Module({ namespaced: true, dynamic: true, store, name: "userStore" })
class UserStore extends VuexModule implements UserState {
  userList: IUsers[] = [];

  @Action
  public async getAllUsers(): Promise<IUsers[]> {
    const presenter = await container.resolve(UserPresenter);
    const users = await presenter.getAllUsersPresenter();
    this.SET_USER_LIST(users);
    return users;
  }

  @Mutation
  private SET_USER_LIST(users: IUsers[]) {
    this.userList = users;
  }
}

export const UserController = getModule(UserStore);
