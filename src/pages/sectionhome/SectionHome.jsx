import styles from "./SectionHome.module.css";
import { motion } from "framer-motion";
function SectionHome() {
  return (
    <section className={styles.section_home}>
      <div className={styles.presentation}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className={styles.title_name}
        >
          Sébastien Lambranca
        </motion.p>
        <motion.p
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={styles.title_job}
        >
          Développeur front-end
        </motion.p>
        <a href="https://github.com/Lambseb/" target="_blank" rel="noreferrer">
          <img className={styles.pic_git} src="/src/assets/github.png" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/s%C3%A9bastien-lambranca-46ab7025a/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.pic_link}
            src="/src/assets/linkedin.png"
            alt=""
            target="_blank"
          />
        </a>
        <p className={styles.welcomer}>
          Bienvenue sur mon portfolio, vous y trouverez mes projets ainsi que
          mes compétences. Bonne visite !
        </p>
      </div>
    </section>
  );
}
export default SectionHome;
