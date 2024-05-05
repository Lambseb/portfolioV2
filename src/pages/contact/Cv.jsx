import styles from "./cv.module.css";
import { motion } from "framer-motion";
import CvSeb from "/public/LAMBRANCA-Sebastien_CV.pdf";
function Cv() {
  return (
    <>
      <section className={styles.section_cv}>
        <div>
          <h3 className={styles.name_cv}>Sébastien LAMBRANCA</h3>
          <p className={styles.para_cv}>
            <strong>DÉVELOPPEUR WEB</strong>
          </p>
        </div>
        <p className={styles.para_cv}>Champagne-Ardenne, Meuse</p>

        <a className={styles.phone_cv} href="tel:+33645654920">
          06.<span className={styles.hidden}>dfsdfsdfdsf</span>45.65.49.20
        </a>

        <div className={styles.div_link}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p className={styles.para_cv}>
              lamb<span className={styles.hidden}>dfsdfsdfdsf</span>
              ranca.s@gma
              <span className={styles.hidden}>dfsdfsdfdsf</span>il.com
            </p>
            <a className={styles.mailto} href="mailto:lambranca.s@gmail.com">
              CONTACTEZ MOI
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className={styles.social_div}
          >
            <p className={styles.para_cv}>Réseau pro</p>
            <a
              className={styles.mailto}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/s%C3%A9bastien-lambranca-46ab7025a/"
            >
              LINKEDIN
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className={styles.mailto}
              href="https://github.com/Lambseb"
            >
              GITHUB
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p className={styles.para_cv}>CV développeur web</p>
            <a className={styles.mailto} href={CvSeb} download>
              TELECHARGER ICI
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Cv;
