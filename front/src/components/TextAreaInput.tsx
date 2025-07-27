import styles from '../assets/css/SurveyPage.module.css';

type TextAreaInputProps = {
  answer: string;
  setAnswer: (newAnswer: string) => void;
  options: { placeholder: string; item?: string[]; max: number };
};

function TextAreaInput({
  answer = '',
  setAnswer,
  options,
}: TextAreaInputProps) {
  return (
    <textarea
      className={`${styles.textarea}`}
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder={options.placeholder}
      {...(options?.max && { maxLength: options?.max })}
    />
  );
}

export default TextAreaInput;
