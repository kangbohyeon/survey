export type QuestionType = 'text' | 'textarea' | 'select';

export type SurveyState = {
  id: number;
  title: string;
  questions: Question[];
};

export type Question = {
  title: string;
  desc: string;
  type: QuestionType;
  required: boolean;
  option: {
    placeholder: string;
    item?: string[];
    max: number;
  };
};
