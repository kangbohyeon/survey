import ProgressIndicator from '../components/ProgressIndicator';
import QuestionBox from '../components/QuestionBox';

import styles from '../assets/css/SurveyPage.module.css';

function SurveyPage() {
  return (
    <div className={`${styles.surveyPageWrapper}`}>
      <ProgressIndicator />
      <QuestionBox />
    </div>
  );
}

export default SurveyPage;
