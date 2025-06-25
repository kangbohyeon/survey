import styles from '../assets/css/SurveyPage.module.css';

type TextAreaInputProps = {
  answers: number | string | string[];
  setAnswers: (newAnswer: number | string | string[]) => void;
  options: { placeholder: string; item?: string[] | undefined };
};
function TextAreaInput({ answers, setAnswers, options }: TextAreaInputProps) {
  return (
    <textarea
      className={`${styles.textarea}`}
      value={answers}
      onChange={(e) => setAnswers(e.target.value)}
      placeholder={options.placeholder}
    />
  );
}

export default TextAreaInput;
