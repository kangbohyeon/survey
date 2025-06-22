import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';

type BodyProps = {
  type: string;
  answers: string[];
  setAnswers: (newAnswer: string) => void;
  options: { placeholder: string; item?: string[] | undefined };
};

function Body({ type, answers, setAnswers, options }: BodyProps) {
  let InputComponent = null;
  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput;
  }

  return (
    <>
      {InputComponent && (
        <InputComponent
          answers={answers}
          setAnswers={setAnswers}
          options={options}
        />
      )}
    </>
  );
}

export default Body;
