import { useRecoilValue } from 'recoil';

import questionsLengthState from '../stores/survey/questionsLengthState';
import useAnswers from '../hooks/useAnswers';
import useStep from '../hooks/useStep';

import Bar from './Bar';

import styles from '../assets/css/ProgressIndicator.module.css';

function ProgressIndicator() {
  const length = useRecoilValue(questionsLengthState);
  const [answers] = useAnswers();
  const step = useStep();

  const bars = [];
  for (let i = 0; i < length; i++) {
    let status = 'pending';
    if (i === step) {
      status = 'in-progress';
    } else if (answers[i]) {
      status = 'done';
    }

    bars.push(<Bar key={i} status={status} />);
  }
  return (
    <div className={`${styles.wrapper}`}>
      {bars}
      <div className={`${styles.page_count}`}>
        <span>{step + 1}</span>/{length}
      </div>
    </div>
  );
}

export default ProgressIndicator;
