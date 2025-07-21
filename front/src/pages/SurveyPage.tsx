import { Suspense } from 'react';

import ProgressIndicator from '../components/ProgressIndicator';
import QuestionBox from '../components/QuestionBox';

import styles from '../assets/css/SurveyPage.module.css';

function SurveyPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className={`${styles.surveyPageWrapper}`}>
        <ProgressIndicator />
        <QuestionBox />
      </div>
    </Suspense>
  );
}

export default SurveyPage;
