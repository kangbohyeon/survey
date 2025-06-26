import { useRecoilValue } from 'recoil';
import { Question } from '../@types/question.type';
import questionsState from '../stores/questions/atom';
import useStep from './useStep';

function useCurrentQuestion() {
  const questions: Question[] = useRecoilValue(questionsState);
  const step = useStep();
  return questions[step];
}

export default useCurrentQuestion;
