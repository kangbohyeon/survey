import styles from '../assets/css/SurveyPage.module.css';
type TextInputProps = {
  answer: string;
  setAnswer: (newAnswer: string) => void;
  options: { placeholder: string; item?: string[] };
};

function TextInput({ answer, setAnswer, options }: TextInputProps) {
  return (
    <input
      className={`${styles.input}`}
      type='text'
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder={options.placeholder}
    />
  );
}

export default TextInput;
