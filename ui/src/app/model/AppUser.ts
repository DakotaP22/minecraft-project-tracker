export class AppUser {
  id: string;
  email: string;
  token: string;
  username: string;

  constructor(id: string, email: string, token: string, username: string) {
    this.id = id;
    this.email = email;
    this.token = token;
    this.username = username;
  }
}
