export function getQuizById(
  state: GameState,
  id: number
): QuizItem | undefined {
  const quizIndex = id - 1;
  return state.quiz[quizIndex];
}

export function getScore(state: GameState): number {
  return state.answers.filter(
    (answer) => answer.correct_answer === answer.answer
  ).length;
}

export function isCorrect(quiz: QuizItem): boolean {
  return quiz.correct_answer === quiz.answer;
}
