import AddCountryForm from "./AddCountryForm/AddCountryForm";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <div className={styles.Home}>
      <AddCountryForm />
    </div>
  );
}
