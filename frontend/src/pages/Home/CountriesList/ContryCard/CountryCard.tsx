import { Country } from "../../../../generated/graphql-types";
import styles from "./CountryCard.module.scss";

interface CountriesCardProps {
  country: Country;
}
const CountryCard: React.FC<CountriesCardProps> = ({ country }) => {
  return (
    <div className={styles.CountryCard}>
      <p>{country.name}</p>
      <p> {country.emoji}</p>
    </div>
  );
};
export default CountryCard;
