import { ActionType, Action } from "@/actions/gameActions";

export const initialState: GameState = {
  quiz: [],
  total: 0,
  answers: [],
};

export const reducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case ActionType.STORE_QUIZ:
      return {
        ...state,
        quiz: action.payload.quiz,
        total: action.payload.quiz.length,
      };
    case ActionType.ANSWER_QUESTION:
      return {
        ...state,
        answers: [...state.answers, action.payload.answer],
      };
    case ActionType.RESET_GAME:
      return initialState;
    default:
      return state;
  }
};
