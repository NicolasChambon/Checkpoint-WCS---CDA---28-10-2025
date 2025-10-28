import AddCountryForm from "./AddCountryForm/AddCountryForm";
import CountriesList from "./CountriesList/CountriesList";
import styles from "./Home.module.scss";
import { useGetAllCountriesQuery } from "../../generated/graphql-types";

export function Home() {
  const { data: countriesList, loading, error } = useGetAllCountriesQuery();

  if (loading) return <div className={styles.Home}>Loading...</div>;
  if (error) return <div className={styles.Home}>Error: {error.message}</div>;
  if (countriesList?.countries.length === 0)
    return <div className={styles.Home}>No data available</div>;

  return (
    <div className={styles.Home}>
      <AddCountryForm />
      <CountriesList countriesList={countriesList?.countries ?? []} />
    </div>
  );
}
