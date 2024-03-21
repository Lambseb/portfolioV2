import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./sectionHome.module.css";
function SectionHome() {
  return (
    <section className={styles.section_home}>
      <div className={styles.presentation}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className={styles.title_name}
        >
          Sébastien Lambranca
        </motion.p>
        <motion.p
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.title_job}
        >
          Développeur web
        </motion.p>
        <NavLink className={styles.btn} to="/Cv">
          CONTACT
        </NavLink>
        <p className={styles.welcomer}>
          Bienvenue sur mon portfolio, vous y trouverez mes projets ainsi que
          mes compétences. Bonne visite ! <br />
        </p>
      </div>
    </section>
  );
}
export default SectionHome;
