export enum QuestionModel {
  quiz = "quiz",
  theory = "theory",
}

export enum CodeLanguagesList {
  javascript = "javascript",
  react = "react",
}

export type OneOfQuestionModelType = keyof typeof QuestionModel;

export type CodeLanguagesListType = keyof typeof CodeLanguagesList;
interface ITestVariant {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface IQuestionItem {
  id: string;
  questionModel?: OneOfQuestionModelType;
  codeLanguage?: CodeLanguagesListType;
  header: string | null | undefined;
  question: string | null | undefined;
  testVariants: Array<ITestVariant> | null | undefined;
  explanation: string | null | undefined;
  isMarked?: boolean;
  watched: boolean;
  rate?: number;
}

export type DynamicContentTypes = "question" | "answer" | "explanation";
