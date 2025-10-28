import React from "react";
import styles from "./CountriesList.module.scss";
import type { Country } from "../../../generated/graphql-types";
import CountryCard from "./ContryCard/CountryCard";

interface CountriesListProps {
  countriesList: Country[];
}

const CountriesList: React.FC<CountriesListProps> = ({ countriesList }) => {
  return (
    <ul className={styles.CountriesList}>
      {countriesList.map((country) => (
        <li key={country.id}>
          <CountryCard country={country} />
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
