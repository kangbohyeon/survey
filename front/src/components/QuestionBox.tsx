import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import questionsState from '../stores/questions/atom';

import { Question } from '../@types/question.type';

import ActionButton from './ActionButton';
import Body from './Body';
import Desc from './Desc';
import Title from './Title';

import styles from '../assets/css/SurveyPage.module.css';

function QuestionBox() {
  const questions: Question[] = useRecoilValue(questionsState);
  const [answers, setAnswers] = useState<string[]>([]);
  const params = useParams();
  const step = parseInt(params.step as string);

  const question = questions[step];
  const answer = answers[step];
  const setAnswer = (newAnswer: string) => {
    setAnswers((answers) => {
      const newAnswers: string[] = [...answers];
      newAnswers[step] = newAnswer;
      return newAnswers;
    });
  };

  return (
    <div className={`${styles.questionBoxWrapper}`}>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answers={answer}
        setAnswers={setAnswer}
        options={question.option}
      />
      <ActionButton />
    </div>
  );
}

export default QuestionBox;
