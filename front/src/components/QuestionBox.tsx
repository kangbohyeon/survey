import useCurrentQuestion from '../hooks/useCurrentQuestion';
import useCurrentAnswer from '../hooks/useCurrentAnswer';

import ActionButton from './ActionButton';
import Body from './Body';
import Desc from './Desc';
import Title from './Title';

import styles from '../assets/css/SurveyPage.module.css';

function QuestionBox() {
  const question = useCurrentQuestion();
  const [answer, setAnswer] = useCurrentAnswer();

  return (
    <div className={`${styles.questionBoxWrapper}`}>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.option}
      />
      <ActionButton />
    </div>
  );
}

export default QuestionBox;
