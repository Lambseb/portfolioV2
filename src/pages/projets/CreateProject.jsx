import styles from "./projects.module.css";
import PropTypes from "prop-types";
function CreateProject({ name, description, link, picture }) {
  return (
    <div className={styles.design_project}>
      <img src={picture} alt={description} />
      <p className={styles.description_text}>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">
        {typeof link == "string" ? "VOIR LE PROJET" : "EN COURS"}
      </a>
    </div>
  );
}
CreateProject.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  picture: PropTypes.string,
};
export default CreateProject;
