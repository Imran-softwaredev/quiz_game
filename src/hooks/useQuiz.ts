import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationService from "@/services/NavigationService";
import useGameState from "./useGameState";
import { getQuizById } from "../selectors";

const useQuiz = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const { state, answerQuestion } = useGameState();
  const [answerState, setSelectedAnswer] = useState<string | undefined>();

  const questionId = id && parseInt(id, 10);
  const quiz = questionId && getQuizById(state, questionId);

  useEffect(() => {
    if (!state || state.total <= 0) {
      NavigationService.goToHome();
    }
    if (state.answers.length >= state.total) {
      NavigationService.goToResults();
    }
  }, [state]);

  useEffect(() => {
    if (quiz) {
      const previousAnswer = state.answers.find(
        (q) => q.question === quiz.question,
      )?.answer;
      setSelectedAnswer(previousAnswer || undefined);
    }
  }, [questionId]);

  const handleNextClick = () => {
    if (!quiz) return;
    answerQuestion({ ...quiz, answer: answerState });
    NavigationService.goToQuiz(questionId + 1);
  };

  const handleBackClick = () => {
    if (questionId && questionId > 1) {
      NavigationService.goToQuiz(questionId - 1);
    }
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  return {
    handleNextClick,
    handleBackClick,
    handleAnswerChange,
    state,
    quiz,
    answerState,
    id,
    questionId,
  };
};

export default useQuiz;
