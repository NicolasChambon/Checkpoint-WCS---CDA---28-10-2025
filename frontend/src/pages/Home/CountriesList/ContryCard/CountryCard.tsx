import { Link } from "react-router-dom";
import { Country } from "../../../../generated/graphql-types";
import styles from "./CountryCard.module.scss";

interface CountriesCardProps {
  country: Country;
}
const CountryCard: React.FC<CountriesCardProps> = ({ country }) => {
  return (
    <Link className={styles.CountryCard} to={`/country/${country.code}`}>
      <p>{country.name}</p>
      <p> {country.emoji}</p>
    </Link>
  );
};
export default CountryCard;
