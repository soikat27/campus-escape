import {Link, Outlet} from 'react-router';
import CartButton from "../CartButton/CartButton.jsx";
import logo from "../../assets/logo/campus-escape-logo.png";
import styles from './App.module.css';

export default function App() {


  return (
    <>
      <header>
        <div className={styles.branding}>
          <img src={logo} alt="logo-campus-escape" />
          <CartButton />
        </div>
        <div className={styles.navBar}>
          <Link to="">Restaurant</Link>
          <Link to="">Museum/Cinema</Link>
          <Link to="">Gift & Sevenior Shop</Link>
          <Link to="">Park/Playground</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2026 Soikat Saha. All rights reserved.</p>
          <a href="https://github.com/soikat27/campus-escape">
              <img src="" alt="github-icon" />
              Source Code
          </a>
      </footer>
    </>
  );
}
