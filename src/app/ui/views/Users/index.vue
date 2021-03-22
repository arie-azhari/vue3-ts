<template>
  <div>
    <h1>Get All Users</h1>
    <p v-for="(user, index) in userList" :key="index">{{ user.name }}</p>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { UserController } from "@/app/ui/controllers/UserController";
import { IUsers } from "@/entities/User";
export default class Project extends Vue {
  created() {
    UserController.getAllUsers();
  }
  get userList(): IUsers[] {
    return UserController.userList;
  }
}
</script>
