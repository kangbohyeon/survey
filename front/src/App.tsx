import { useState } from 'react';
import { Question } from './@types/question.type';
import ProgressIndicator from './components/ProgressIndicator';
import QuestionBox from './components/QuestionBox';

function App() {
  const questions: Question[] = [
    {
      title: '질문1입니다.',
      desc: '설명1입니다.',
      type: 'text',
      required: false,
      // option: {},
    },
    {
      title: '질문2입니다.',
      desc: '설명2입니다.',
      type: 'text',
      required: false,
      // option: {},
    },
  ];

  const step = 1;

  const [answers, setAnswers] = useState<string[]>([]);
  return (
    <>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answers={answers}
        setAnswers={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers: string[] = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </>
  );
}

export default App;
