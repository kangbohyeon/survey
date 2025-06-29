export type QuestionType = 'text' | 'textarea' | 'select';

export type Question = {
  title: string;
  desc: string;
  type: QuestionType;
  required: boolean;
  option: {
    placeholder: string;
    item?: string[];
  };
};
