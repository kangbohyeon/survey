import { useRecoilState } from 'recoil';
import { Question } from '../@types/question.type';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';

function useCurrentQuestion() {
  const [surveyData, setSurvey] = useRecoilState(surveyState);
  const questions: Question[] = surveyData?.questions || [];
  const step = useStep();
  return questions[step];
}

export default useCurrentQuestion;
