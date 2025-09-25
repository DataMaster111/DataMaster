import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.menu}>
        <li>Анализ</li>
        <li>Анализ источников входных данных</li>
        <li>Анализ входных данных</li>
        <li>Выбор оптимальной БД</li>
        <li>Отчёты</li>
        <li>Таблицы</li>
        <li>Проекты</li>
        <li>Запросы</li>
        <li>Личный кабинет</li>
      </ul>
      <div className={styles.logout}>Выход</div>
    </aside>
  );
}
