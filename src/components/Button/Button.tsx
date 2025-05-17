import styles from './_button.module.scss';

type Props = {
  label: string;
};

export const Button = ({ label }: Props) => {
  return <button className={styles.button}>{label}</button>;
};
