export class Endpoints {
  public static baseUrl = process.env.VUE_APP_BASE_URL;

  user(): string {
    return "/users";
  }
}
