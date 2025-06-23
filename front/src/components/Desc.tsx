import styles from '../assets/css/SurveyPage.module.css';
type DescProps = {
  children: React.ReactNode;
};
function Desc({ children }: DescProps) {
  return <h4 className={`${styles.descWrapper}`}>{children}</h4>;
}

export default Desc;
