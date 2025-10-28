import { useParams } from "react-router-dom";
import styles from "./CountryPage.module.scss";
import { useGetCountryQuery } from "../../generated/graphql-types";

export default function CountryPage() {
  const { code } = useParams<{ code: string }>();

  const { data, loading, error } = useGetCountryQuery({
    variables: { code: code ?? "" },
  });

  if (!code)
    return <div className={styles.CountryPage}>No country code provided</div>;
  if (loading) return <div className={styles.CountryPage}>Loading...</div>;
  if (error) return <div className={styles.CountryPage}>An error occurred</div>;
  if (!data?.country)
    return <div className={styles.CountryPage}>Country not found</div>;

  const country = data.country;

  return (
    <div className={styles.CountryPage}>
      <p className={styles.CountryPageEmoji}>{country.emoji}</p>
      <p>
        Name : {country.name} {`(${country.code})`}
      </p>
      {country.continent && <p>Continent : {country.continent.name}</p>}
    </div>
  );
}
