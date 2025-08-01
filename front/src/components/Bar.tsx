import styles from '../assets/css/Bar.module.css';

type BarProps = {
  status: string;
};

function Bar({ status }: BarProps) {
  let style = undefined;
  if (status === 'done') {
    style = `${styles.done}`;
  } else if (status === 'pending') {
    style = `${styles.pending}`;
  } else if (status === 'in-progress') {
    style = `${styles.in_progress}`;
  }
  return <div className={`${styles.wrapper} ${style}`}></div>;
}

export default Bar;
