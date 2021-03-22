import { IUsers } from "@/entities/User";
export interface UserRepositoryInterface {
  getAllUsers(): Promise<IUsers[]>;
}
