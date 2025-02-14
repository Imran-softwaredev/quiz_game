import { useEffect, useMemo } from "react";
import NavigationService from "@/services/NavigationService";
import { getScore, isCorrect } from "../selectors";
import useGameState from "./useGameState";

const useResults = () => {
  const { state, resetGame } = useGameState();

  const obtainedScore = useMemo(() => getScore(state), [state]);

  useEffect(() => {
    if (state.answers.length <= 0) {
      NavigationService.goToHome();
    }
  }, [state]);

  const onClickPlayAgain = () => {
    resetGame();
    NavigationService.goToHome();
  };

  return {
    onClickPlayAgain,
    obtainedScore,
    total: state.total,
    state,
    isCorrect,
  };
};

export default useResults;
