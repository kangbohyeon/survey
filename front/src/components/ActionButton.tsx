import { useNavigate } from 'react-router-dom';

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
        <button
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </button>
      )}
      {isLast ? (
        <button
          onClick={() => {
            navigate('/done');
          }}
        >
          제출
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
}

export default ActionButton;
