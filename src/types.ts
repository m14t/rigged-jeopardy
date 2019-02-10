interface Category {
  category: string;
  questions: QuestionContainer[];
}

export interface Player {
  name: string;
  score: number;
}

export interface QuestionContainer {
  easy: Question;
  hard: Question;
}

interface Question {
  question: string;
  answer: string;
}

export type QuestionData = Category[];
