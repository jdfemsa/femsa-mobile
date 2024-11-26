// Simulate an API that checks if a username and password match predefined values.
export default class UserService {
  static async login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(username === "admin" && password === "admin");
      }, 1000);
    });
  }
}
