import { useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import { Question } from '../@types/question.type';
import questionsState from '../stores/questions/atom';
import Button from './Button';

import styles from '../assets/css/SurveyPage.module.css';

function ActionButton() {
  const questions: Question[] = useRecoilValue(questionsState);
  const navigate = useNavigate();
  const questionsLength = questions.length;
  const params = useParams();
  const step = parseInt(params.step as string);

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
