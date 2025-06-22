export type Question = {
  title: string;
  desc: string;
  type: string;
  required: boolean;
  option: {
    placeholder: string;
    item?: string[];
  };
};
