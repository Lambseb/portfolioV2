import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <footer className={styles.title}>
      <NavLink to="/" className={styles.link_btn}>
        Home
      </NavLink>
      <NavLink to="/Presentation" className={styles.link_btn}>
        Présentation
      </NavLink>
      <NavLink to="/Projects" className={styles.link_btn}>
        Projets
      </NavLink>
      <NavLink to="/Cv" className={styles.link_btn}>
        CV & Contact
      </NavLink>
    </footer>
  );
}
export default Header;
