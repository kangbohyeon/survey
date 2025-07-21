import { useRecoilValue } from 'recoil';
import { Question } from '../@types/question.type';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const surveyData = useRecoilValue(surveyState);
  const questions: Question[] = surveyData?.questions || [];

  return questions[step];
}

export default useCurrentQuestion;
