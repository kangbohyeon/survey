import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import questionsLengthState from '../stores/survey/questionsLengthState';
import useStep from '../hooks/useStep';

import Button from './Button';

import styles from '../assets/css/SurveyPage.module.css';
import useSurveyId from '../hooks/useSurveyId';
import postAnswers from '../services/postAnswers';
import useAnswers from '../hooks/useAnswers';

function ActionButton() {
  const step = useStep();
  const surveyId = useSurveyId();
  const answers = useAnswers();
  const questionsLength = useRecoilValue(questionsLengthState);

  const navigate = useNavigate();

  const isFirst: boolean = step === 0;
  const isLast: boolean = questionsLength - 1 === step;
  return (
    <div className={`${styles.actionButtonWrapper}`}>
      {isFirst || (
        <Button
          type='SECONDARY'
          onChange={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type='PRIMARY'
          onChange={() => {
            postAnswers(surveyId, answers);
            navigate('/done');
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type='PRIMARY'
          onChange={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </div>
  );
}

export default ActionButton;
