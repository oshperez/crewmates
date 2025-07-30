import { useState } from "react";
import styles from "./Form.module.css";
import {
  createCrewmate,
  deleteCrewmate,
  updateCrewmate,
} from "../config/supabaseClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Form({ member, refreshCrew }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: member?.name || "",
    email: member?.email || "",
    role: member?.role || "Contributor",
    isActive: member?.isActive ?? true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data, error;
    // Crete crewmate
    if (member) {
      ({ data, error } = await updateCrewmate(formData, member.id));

      // Update crewmate
    } else {
      ({ data, error } = await createCrewmate(formData));
    }

    if (error) {
      toast.error("Something went wrong when creating crewmate");
      resetForm();
    }

    if (data) {
      const [newMember] = data;
      toast.success(`Crewmate ${member ? "updated" : "created"} successfully`);
      refreshCrew();
      navigate(`/details/${newMember.id}`);
      console.log(data);
    }
  };

  // Delete crewmate
  const handleDelete = async (memberId) => {
    const { data, error } = await deleteCrewmate(memberId);
    if (error) {
      toast.error("Could not delete crewmate");
    }
    if (data) {
      toast.success(`${data[0].name} deleted succesfully`);
      resetForm();
      refreshCrew();
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", role: "Contributor", isActive: true });
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
                name="isActive"
                value={true}
                checked={formData.isActive === true}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    isActive: true,
                  }))
                }
              />
              Active
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="isActive"
                value={false}
                checked={formData.isActive === false}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    isActive: false,
                  }))
                }
              />
              Inactive
            </label>
          </fieldset>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button type="submit" className={styles.button}>
          {member ? "Update Member" : "Add Member"}
        </button>
        {member && (
          <button
            type="button"
            className={`${styles.button} ${styles.outlined}`}
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(member.id);
            }}
          >
            Delete Member
          </button>
        )}
      </div>
    </form>
  );
}
