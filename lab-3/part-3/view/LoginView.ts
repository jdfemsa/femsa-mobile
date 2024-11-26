// Specify methods for showing success or error messages
export class LoginView {
  showSuccessMessage(message: string) {
    console.log(`Success: ${message}`);
  }

  showErrorMessage(message: string) {
    console.error(`Error: ${message}`);
  }
}
