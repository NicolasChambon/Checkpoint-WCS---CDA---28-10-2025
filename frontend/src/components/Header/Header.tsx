import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.Header}>
      <h1 className={styles.HeaderTitle}>Checkpoint : frontend</h1>
      <h2 className={styles.HeaderSubtitle}>Countries</h2>
    </header>
  );
}
