import TextInput from './TextInput';

type BodyProps = {
  type: string;
  answers: string[];
  setAnswers: (newAnswer: string) => void;
};

function Body({ type, answers, setAnswers }: BodyProps) {
  let InputComponent = null;
  if (type === 'select') {
    console.log(1);
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    console.log(2);
  }

  return (
    <>
      {InputComponent && (
        <InputComponent answers={answers} setAnswers={setAnswers} />
      )}
    </>
  );
}

export default Body;
