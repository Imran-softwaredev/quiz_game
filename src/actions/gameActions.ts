export enum ActionType {
  STORE_QUIZ = "STORE_QUIZ",
  ANSWER_QUESTION = "ANSWER_QUESTION",
  RESET_GAME = "RESET_GAME",
}

export type Action =
  | { type: ActionType.STORE_QUIZ; payload: { quiz: QuizItem[] } }
  | { type: ActionType.ANSWER_QUESTION; payload: { answer: QuizItem } }
  | { type: ActionType.RESET_GAME };
