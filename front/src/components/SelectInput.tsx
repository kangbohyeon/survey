import styles from '../assets/css/SurveyPage.module.css';

type SelectInputProps = {
  answer: number[];
  setAnswer: (newAnswers: number[]) => void;
  options: { placeholder: string; item?: string[]; max?: number };
};

type ItemProps = {
  children: React.ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Item({ children, checked, onChange }: ItemProps) {
  return (
    <div className={`${styles.itemWrapper}`}>
      <label>
        <input type='checkbox' checked={checked} onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </div>
  );
}

function SelectInput({ answer = [], setAnswer, options }: SelectInputProps) {
  const handleChange = (isChecked: boolean, index: number) => {
    if (isChecked) {
      const max = options?.max || 0;
      if (answer?.length >= max) {
        return;
      }
      setAnswer([...answer, index]);
    } else {
      setAnswer(answer.filter((item) => item !== index));
    }
  };
  return (
    <div className={`${styles.selectInputWrapper}`}>
      {options?.item?.map((item, index) => {
        return (
          <Item
            key={index}
            checked={answer.includes(index)}
            onChange={(e) => {
              handleChange(e.target.checked, index);
            }}
          >
            {item}
          </Item>
        );
      })}
    </div>
  );
}

export default SelectInput;
