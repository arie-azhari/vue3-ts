import { createStore } from "vuex";
import { UserState } from "@/app/ui/controllers/UserController";

export interface RootState {
  users: UserState;
}

export default createStore<RootState>({});
