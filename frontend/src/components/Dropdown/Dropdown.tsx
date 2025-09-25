import { useState } from "react";
import styles from "./Dropdown.module.css";

type Props = {
  options: string[];
  placeholder: string;
};

export default function Dropdown({ options, placeholder }: Props) {
  const [value, setValue] = useState("");

  return (
    <select
      className={styles.select}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
