// Implement LoginPresenter to handle the login process by coordinating between UserService and LoginView

import UserService from "../model/UserService";
import { LoginView } from "../view/LoginView";

export class LoginPresenter {
  private view: LoginView;

  constructor(view: LoginView) {
    this.view = view;
  }

  async login(username: string, password: string) {
    try {
      const success = await UserService.login(username, password);
      if (success) {
        this.view.showSuccessMessage("Login successful");
      } else {
        this.view.showErrorMessage("Login failed");
      }
    } catch (error) {
      this.view.showErrorMessage("An error occurred");
    }
  }
}
