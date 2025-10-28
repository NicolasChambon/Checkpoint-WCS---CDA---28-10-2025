import React, { ChangeEvent, useState } from "react";
import styles from "./AddCountryForm.module.scss";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      // TODO : toast
      console.warn("Name is required");
      return;
    }

    // TODO : appel api

    setFormData({ name: "", emoji: "", code: "" });
  };

  return (
    <form className={styles.AddCountryForm} onSubmit={handleSubmit}>
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>

      <button className={styles.AddCountryFormButton} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddCountryForm;
