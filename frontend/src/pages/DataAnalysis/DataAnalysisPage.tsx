import styles from "./DataAnalysisPage.module.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";

export default function DataAnalysisPage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.breadcrumb}>
        Анализ / Анализ источников входных данных
      </h2>

      <div className={styles.form}>
        <label>Источник данных</label>
        <Dropdown
          options={["Файл", "База данных"]}
          placeholder="Выберите вариант"
        />
        <Button text="Анализировать" disabled />
      </div>
    </div>
  );
}
