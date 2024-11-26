// Create a view that implements LoginView and displays messages based on the presenter’s feedback.

import { LoginPresenter } from "../presenter/LoginPresenter";
import { LoginView } from "./LoginView";

export class LoginScreen implements LoginView {
  private presenter: LoginPresenter;

  constructor(presenter: LoginPresenter) {
    this.presenter = presenter;
  }

  showSuccessMessage(message: string): void {
    console.log(message);
  }

  showErrorMessage(message: string): void {
    console.error(message);
  }

  login(username: string, password: string): void {
    this.presenter.login(username, password);
  }
}
