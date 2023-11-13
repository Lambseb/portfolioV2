import styles from "./Projects.module.css";

function CreateProject({ name, description, link, picture }) {
  return (
    <div className={styles.design_project}>
      <img src={picture} alt={description} />
      <p className={styles.description_text}>{description}</p>
      <a href={link}>
        {typeof link == "string" ? "VOIR LE PROJET" : "EN COURS"}
      </a>
    </div>
  );
}

export default CreateProject;
