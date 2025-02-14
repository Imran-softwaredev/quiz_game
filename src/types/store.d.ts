interface QuizItem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
  answer?: string;
}

interface GameState {
  quiz: Array<QuizItem>;
  total: number;
  answers: Array<QuizItem>;
}

interface StateContextValue {
  state: GameState;
  loading: boolean;
  fetchQuiz: () => Promise<Array<QuizItem> | undefined>;
  storeQuiz: (quiz: Array<QuizItem>) => void;
  answerQuestion: (answer: QuizItem) => void;
  resetGame: () => void;
}
