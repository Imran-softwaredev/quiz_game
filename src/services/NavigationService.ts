import { useNavigate } from "react-router-dom";

class NavigationService {
  private navigate: ReturnType<typeof useNavigate> | null = null;

  setNavigator(navigate: ReturnType<typeof useNavigate>) {
    this.navigate = navigate;
  }

  goTo(path: string) {
    if (this.navigate) {
      this.navigate(path);
    } else {
      window.location.href = path;
    }
  }

  goToHome() {
    this.goTo("/");
  }

  goToQuiz(id: number) {
    this.goTo(`/quiz/${id}`);
  }

  goToResults() {
    this.goTo("/results");
  }

  goBack() {
    window.history.back();
  }

  goForward() {
    window.history.forward();
  }
}

export default new NavigationService();
