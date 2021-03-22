import { injectable } from "tsyringe";
import { UserApiRepository } from "@/app/infrastructures/repositories/Api/UserApiRepository";
import { IUsers } from "@/entities/User";

@injectable()
export class UserPresenter {
  private repository: UserApiRepository;
  constructor(repository: UserApiRepository) {
    this.repository = repository;
  }

  public getAllUsersPresenter(): Promise<IUsers[]> {
    return this.repository.getAllUsers();
  }
}
