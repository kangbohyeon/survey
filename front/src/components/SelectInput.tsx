import styles from '../assets/css/SurveyPage.module.css';

type SelectInputProps = {
  answer: number[];
  setAnswer: (newAnswers: number[]) => void;
  options: { placeholder: string; item?: string[] };
};

type ItemProps = {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Item({ children, onChange }: ItemProps) {
  return (
    <div className={`${styles.itemWrapper}`}>
      <label>
        <input type='checkbox' onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </div>
  );
}

function SelectInput({ answer = [], setAnswer, options }: SelectInputProps) {
  const handleChange = (isChecked: boolean, index: number) => {
    console.log(
      `answers : ${answer}, isChecked : ${isChecked}, index : ${index}`
    );
    if (isChecked) {
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
