import styles from '../assets/css/SurveyPage.module.css';
type TitleProps = {
  children: React.ReactNode;
};

function Title({ children }: TitleProps) {
  return (
    <h1 className={`${styles.titleWrapper}`}>
      <span>Q.</span>
      {children}
    </h1>
  );
}

export default Title;
