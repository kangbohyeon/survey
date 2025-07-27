import congrats from '../assets/img/congrats.png';
import reload from '../assets/img/reload.png';

import useSurveyId from '../hooks/useSurveyId';

import Button from '../components/Button';

import styles from '../assets/css/CompletionPage.module.css';
import { useNavigate } from 'react-router-dom';
function CompletionPage() {
  const surveyId = useSurveyId();
  const navigate = useNavigate();
  return (
    <div className={`${styles.page_wrapper}`}>
      <img src={congrats} alt='' width='209' height='204' />
      <div className={`${styles.mid_text}`}>설문을 완료했습니다.</div>
      <Button
        type='SECONDARY'
        style={`${styles.reload_button}`}
        onChange={() => {
          navigate(`/survey/${surveyId}/0`);
        }}
      >
        <img src={reload} alt='' />
        새로운 응답 제출하기
      </Button>
    </div>
  );
}

export default CompletionPage;
