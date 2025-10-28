import React, { ChangeEvent, useState } from "react";
import styles from "./AddCountryForm.module.scss";
import {
  useAddCountryMutation,
  GetAllCountriesDocument,
} from "../../../generated/graphql-types";

interface AddCountryFormData {
  name: string;
  emoji: string;
  code: string;
}

const AddCountryForm: React.FC = () => {
  const [formData, setFormData] = useState<AddCountryFormData>({
    name: "",
    emoji: "",
    code: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [addCountry, { loading }] = useAddCountryMutation();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name === "" || formData.code === "" || formData.emoji === "") {
      // TODO : toast
      console.warn("Please fill all fields");
      return;
    }

    try {
      const result = await addCountry({
        variables: {
          data: {
            name: formData.name,
            code: formData.code,
            emoji: formData.emoji,
          },
        },
        refetchQueries: [{ query: GetAllCountriesDocument }],
        awaitRefetchQueries: true,
      });

      if (result && result.data) {
        setFormData({ name: "", emoji: "", code: "" });
      }
    } catch (err) {
      // TODO : toast
      console.error("Failed to add country", err);
    }
  };

  return (
    <form className={styles.AddCountryForm} onSubmit={handleFormSubmit}>
      <div className={styles.AddCountryFormField}>
        <label className={styles.AddCountryFormFieldLabel} htmlFor="name">
          Name
        </label>
        <input
          className={styles.AddCountryFormFieldInput}
          id="name"
          name="name"
          type="text"
          placeholder=""
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.AddCountryFormField}>
        <label className={styles.AddCountryFormFieldLabel} htmlFor="emoji">
          Emoji
        </label>
        <input
          className={styles.AddCountryFormFieldInput}
          id="emoji"
          name="emoji"
          type="text"
          placeholder=""
          value={formData.emoji}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.AddCountryFormField}>
        <label className={styles.AddCountryFormFieldLabel} htmlFor="code">
          Code
        </label>
        <input
          className={styles.AddCountryFormFieldInput}
          id="code"
          name="code"
          type="text"
          placeholder=""
          value={formData.code}
          onChange={handleInputChange}
        />
      </div>

      <button
        className={styles.AddCountryFormButton}
        type="submit"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </form>
  );
};

export default AddCountryForm;
