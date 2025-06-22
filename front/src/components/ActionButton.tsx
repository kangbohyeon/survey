import { useNavigate } from 'react-router-dom';
import Button from './Button';

type ActionButtonProps = {
  questionsLength: number;
  step: number;
};

function ActionButton({ questionsLength, step }: ActionButtonProps) {
  const navigate = useNavigate();
  const isFirst: boolean = step === 0;
  const isLast: boolean = questionsLength - 1 === step;
  return (
    <div>
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
