type ActionButtonProps = {
  questionsLength: number;
  step: number;
};

function ActionButton({ questionsLength, step }: ActionButtonProps) {
  const isFirst: boolean = step === 0;
  const isLast: boolean = questionsLength - 1 === step;
  return (
    <div>
      {isFirst || <button>이전</button>}
      {isLast ? <button>제출</button> : <button>다음</button>}
    </div>
  );
}

export default ActionButton;
