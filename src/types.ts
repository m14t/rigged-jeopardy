interface Category {
  category: string;
  questions: QuestionContainer[];
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
