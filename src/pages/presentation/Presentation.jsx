import styles from "./presentation.module.css";
import { motion } from "framer-motion";
import logoJs from "/src/assets/logo-js.png";
import logoReact from "/src/assets/logo-react.png";
import logoNode from "/src/assets/logo-node.png";
import logoSql from "/src/assets/logo-mysql.png";
import logoGit from "/src/assets/logo-git.png";
import logoHtml from "/src/assets/logo-html.png";
import logoCss from "/src/assets/logo-css.png";
import portrait from "/src/assets/portrait.jpg";

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
          src={portrait}
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
        <p className={styles.skill_text}>COMPETENCES</p>
        <div className={styles.logo_div}>
          <img className={styles.logo_img} src={logoJs} alt="logo js" />
          <img className={styles.logo_img} src={logoReact} alt="logo react" />
          <img className={styles.logo_img} src={logoNode} alt="logo node" />
          <img className={styles.logo_img} src={logoSql} alt="logo mysql" />
          <img className={styles.logo_img} src={logoGit} alt="logo git" />
          <img className={styles.logo_img} src={logoHtml} alt="logo html" />
          <img className={styles.logo_img} src={logoCss} alt="logo css" />
        </div>
        <p className={styles.pres_text}>
          J’ai commencé mon apprentissage du développement fin 2022 avec les
          bases du front-end (HTML, CSS, Javascript), j’ai ensuite rejoins le
          cursus de la WildCodeSchool en Septembre 2023 pour une formation
          Développeur full-stack, je suis maintenant en route pour monter en
          compétences et devenir le moteur de ma réussite !
        </p>
      </motion.section>
    </article>
  );
}
export default Presentation;
