import { useState } from 'react';
import { Question } from '../@types/question.type';
import ProgressIndicator from '../components/ProgressIndicator';
import QuestionBox from '../components/QuestionBox';
import { useParams } from 'react-router-dom';

function SurveyPage() {
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
