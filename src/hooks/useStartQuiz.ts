import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavigationService from "@/services/NavigationService";
import useGameState from "./useGameState";

const useStartQuiz = () => {
  const { fetchQuiz, loading } = useGameState();
  const navigate = useNavigate();

  NavigationService.setNavigator(navigate);

  const onClickBegin = useCallback(async () => {
    const quiz = await fetchQuiz();
    if (quiz) {
      NavigationService.goToQuiz(1);
    }
  }, [fetchQuiz]);

  return {
    loading,
    onClickBegin,
  };
};

export default useStartQuiz;
