import styles from "./presentation.module.css";
import { motion } from "framer-motion";
function Presentation() {
  return (
    <article className={styles.article_presentation}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.top_presentation}
      >
        <img
          className={styles.pic_portrait}
          src="/src/assets/portrait.jpg"
          alt="photo de profil de Sébastien LAMBRANCA"
        />
        <p className={styles.para_presentation}>
          Développeur web et passionné d’informatique depuis mes 15 ans je fais
          aujourd’hui l’une de mes passions mon metier !
        </p>
      </motion.div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className={styles.section_presentation}
      >
        <p>
          J’ai commencé mon apprentissage du développement fin 2022 avec les
          bases du front-end (HTML, CSS, Javascript), j’ai ensuite rejoins le
          cursus de la WildCodeSchool en Septembre 2023 pour une formation
          Développeur full-stack, je suis maintenant en route pour monter en
          compétences et devenir le moteur de ma réussite !
        </p>
        <p>COMPETENCES TECHNIQUE:</p>
        <p>
          Formation développement web full-stack: Javascript React.js Node.js
          Express.js MySQL Git/GitHub HTML CSS
        </p>
      </motion.section>
    </article>
  );
}
export default Presentation;
