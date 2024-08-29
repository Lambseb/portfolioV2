import styles from "./projects.module.css";
import projects from "/src/data/projects.json";
import CreateProject from "./CreateProject";
import { motion } from "framer-motion";
function Projects() {
  return (
    <section className={styles.section_Projects}>
      <motion.article
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h3>Mes Projets</h3>
        <p className={styles.project_p}>
          Si l&apos;on veut obtenir quelque chose que l&apos;on n&apos;a jamais eu, il faut
          tenter quelque chose que l&apos;on n&apos;a jamais fait.
        </p>
        <p className={styles.project_p}>Périclès.</p>
      </motion.article>
      <div className={styles.container_project}>
        {projects &&
          projects.map((element) => (
            <div key={element.id}>
              <CreateProject
                name={element.name}
                description={element.description}
                link={element.link}
                picture={element.picture}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
export default Projects;
