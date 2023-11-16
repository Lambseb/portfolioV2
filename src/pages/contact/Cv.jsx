import styles from "./cv.module.css";
import { motion } from "framer-motion";
function Cv() {
  return (
    <>
      <section className={styles.section_cv}>
        <div>
          <h3 className={styles.name_cv}>Sébastien LAMBRANCA</h3>
          <p className={styles.para_cv}>
            <strong>DEVELOPPEUR FRONT-END</strong>
          </p>
        </div>

        <a className={styles.phone_cv} href="tel:+33645654920">
          06.<span className={styles.hidden}>dfsdfsdfdsf</span>45.65.49.20
        </a>
        <p className={styles.para_cv}>51800 Sainte-Ménehould</p>

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
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p className={styles.para_cv}>CV développeur web</p>
            <a
              className={styles.mailto}
              href="https://www.dropbox.com/scl/fi/27wn8j5dllywuq04r1o07/CV_Sebastien_Lambranca_Alternance.pdf?rlkey=z5vbgxq61gkjtviqiqu8b9puk&dl=0"
            >
              TELECHARGER ICI
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Cv;
