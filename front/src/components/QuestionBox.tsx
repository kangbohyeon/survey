import { Question } from '../@types/question.type';
import ActionButton from './ActionButton';
import Body from './Body';
import Desc from './Desc';
import Title from './Title';

import styles from '../assets/css/SurveyPage.module.css';

type QuestionBoxProps = {
  question: Question;
  questionsLength: number;
  step: number;
  answers: string[];
  setAnswers: (newAnswer: string) => void;
};

function QuestionBox({
  question,
  questionsLength,
  step,
  answers,
  setAnswers,
}: QuestionBoxProps) {
  return (
    <div className={`${styles.questionBoxWrapper}`}>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answers={answers}
        setAnswers={setAnswers}
        options={question.option}
      />
      <ActionButton questionsLength={questionsLength} step={step} />
    </div>
  );
}

export default QuestionBox;
