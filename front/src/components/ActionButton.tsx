import { useState } from 'react';

import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import questionsLengthState from '../stores/survey/questionsLengthState';
import postAnswers from '../services/postAnswers';

import useStep from '../hooks/useStep';
import useSurveyId from '../hooks/useSurveyId';
import useAnswers from '../hooks/useAnswers';
import useRequiredOption from '../hooks/useRequiredOption';

import Button from './Button';

import styles from '../assets/css/SurveyPage.module.css';

function ActionButton() {
  const step = useStep();
  const surveyId = useSurveyId();
  const answers = useAnswers();
  const questionsLength = useRecoilValue(questionsLengthState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const isFirst: boolean = step === 0;
  const isLast: boolean = questionsLength - 1 === step;
  const isRequired = useRequiredOption();
  const isBlockToNext = isRequired ? !answers[step]?.length : false;
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
            setIsLoading(true);
            postAnswers(surveyId, answers)
              .then(() => {
                navigate(`/done/${surveyId}`);
              })
              .catch((error) => {
                console.error(error);
                setIsLoading(false);
                alert('에러가 발생했습니다. 다시 시도해주세요');
              });
          }}
          disabled={isLoading || isBlockToNext}
        >
          {isLoading ? '제출 중입니다...' : '제출'}
        </Button>
      ) : (
        <Button
          type='PRIMARY'
          onChange={() => {
            navigate(`${step + 1}`);
          }}
          disabled={isBlockToNext}
        >
          다음
        </Button>
      )}
    </div>
  );
}

export default ActionButton;
