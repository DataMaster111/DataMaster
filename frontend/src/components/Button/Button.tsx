import styles from "./Button.module.css";

type Props = {
  text: string;
  disabled?: boolean;
};

export default function Button({ text, disabled }: Props) {
  return (
    <button className={styles.button} disabled={disabled}>
      {text}
    </button>
  );
}
