import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={styles.header__link} to="/welcome">
              Startsida
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.header__link} to="/characters">
              Karaktärer
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
