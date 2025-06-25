import styles from '../assets/css/SurveyPage.module.css';
type TextInputProps = {
  answers: number | string | string[];
  setAnswers: (newAnswer: number | string | string[]) => void;
  options: { placeholder: string; item?: string[] | undefined };
};

function TextInput({ answers, setAnswers, options }: TextInputProps) {
  return (
    <input
      className={`${styles.input}`}
      type='text'
      value={answers}
      onChange={(e) => {
        setAnswers(e.target.value);
      }}
      placeholder={options.placeholder}
    />
  );
}

export default TextInput;
