import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ member }) {
  const [formData, setFormData] = useState({
    name: member?.name || "",
    email: member?.email || "",
    role: member?.role || "Contributor",
    status: member?.status || "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.card}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Enter name"
            />
          </label>

          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Enter email"
            />
          </label>
        </div>
        <div className={styles.card}>
          <label className={styles.label}>
            Role
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="Owner">Owner</option>
              <option value="Maintainer">Maintainer</option>
              <option value="Contributor">Contributor</option>
              <option value="Reviewer">Reviewer</option>
              <option value="Viewer">Viewer</option>
            </select>
          </label>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Status</legend>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="status"
                value="Active"
                checked={formData.status === "Active"}
                onChange={handleChange}
              />
              Active
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={formData.status === "Inactive"}
                onChange={handleChange}
              />
              Inactive
            </label>
          </fieldset>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button type="submit" className={styles.button}>
          Add Member
        </button>
        {member && (
          <button
            type="submit"
            className={`${styles.button} ${styles.outlined}`}
          >
            Delete Member
          </button>
        )}
      </div>
    </form>
  );
}
