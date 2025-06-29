import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';

import styles from '../assets/css/SurveyPage.module.css';
type BodyProps =
  | {
      type: 'text' | 'textarea';
      answer: string;
      setAnswer: (newAnswer: string) => void;
      options: { placeholder: string; item?: string[] };
    }
  | {
      type: 'select';
      answer: number[];
      setAnswer: (newAnswers: number[]) => void;
      options: { placeholder: string; item: string[] };
    };

function Body({ type, answer, setAnswer, options }: BodyProps) {
  if (type === 'select') {
    return (
      <div className={`${styles.bodyWrapper}`}>
        <SelectInput answer={answer} setAnswer={setAnswer} options={options} />
      </div>
    );
  } else if (type === 'text') {
    <div className={`${styles.bodyWrapper}`}>
      <TextInput answer={answer} setAnswer={setAnswer} options={options} />
    </div>;
  } else if (type === 'textarea') {
    <div className={`${styles.bodyWrapper}`}>
      <TextAreaInput answer={answer} setAnswer={setAnswer} options={options} />
    </div>;
  }
}

export default Body;
