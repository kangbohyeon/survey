import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Question } from '../@types/question.type';

import ProgressIndicator from '../components/ProgressIndicator';
import QuestionBox from '../components/QuestionBox';

function SurveyPage() {
  const questions: Question[] = [
    {
      title: '질문1입니다.',
      desc: '설명1입니다.',
      type: 'text',
      required: false,
      option: {
        placeholder: 'placeholder 입니다.',
      },
    },
    {
      title: '질문2입니다.',
      desc: '설명2입니다.',
      type: 'textarea',
      required: false,
      option: {
        placeholder: 'placeholder 입니다.',
      },
    },
    {
      title: '질문3입니다.',
      desc: '설명3입니다.',
      type: 'select',
      required: false,
      option: {
        placeholder: '',
        item: ['답변1', '답변2', '답변3', '답변4', '답변5'],
      },
    },
  ];

  const params = useParams();
  const step = parseInt(params.step as string);
  const [answers, setAnswers] = useState<string[]>([]);
  return (
    <div>
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
    </div>
  );
}

export default SurveyPage;
