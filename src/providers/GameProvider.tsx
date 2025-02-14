import React, { useReducer, useState, useCallback } from "react";
import API from "@/api";
import { StateContext } from "@/context/StateContext";
import { reducer, initialState } from "@/reducers/gameReducer";
import { ActionType } from "@/actions/gameActions";

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);

  const fetchQuiz = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get("");
      const quizData = response.data.results as QuizItem[];
      dispatch({ type: ActionType.STORE_QUIZ, payload: { quiz: quizData } });
      return quizData;
    } catch (error) {
      console.error("Failed to fetch quiz: ", error);
      return undefined;
    } finally {
      setLoading(false);
    }
  }, []);

  const storeQuiz = (quiz: QuizItem[]) =>
    dispatch({ type: ActionType.STORE_QUIZ, payload: { quiz } });

  const answerQuestion = (answer: QuizItem) =>
    dispatch({ type: ActionType.ANSWER_QUESTION, payload: { answer } });

  const resetGame = () => dispatch({ type: ActionType.RESET_GAME });

  return (
    <StateContext.Provider
      value={{
        state,
        loading,
        fetchQuiz,
        storeQuiz,
        answerQuestion,
        resetGame,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
