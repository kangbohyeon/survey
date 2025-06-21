type TextInputProps = {
  answers: string[];
  setAnswers: (newAnswer: string) => void;
};

function TextInput({ answers, setAnswers }: TextInputProps) {
  return (
    <input
      type='text'
      value={answers}
      onChange={(e) => {
        setAnswers(e.target.value);
      }}
    />
  );
}

export default TextInput;
