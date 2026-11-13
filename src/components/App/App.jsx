import {Link, Outlet, useLocation} from 'react-router';
import CartButton from "../CartButton/CartButton.jsx";
import githubIcon from "../../assets/icon/github-icon.svg";
import styles from './App.module.css';
import { useState } from 'react';

export default function App() {
    const [placeCount, setPlaceCount] = useState(0);
    const [myWeekend, setMyWeekend] = useState([]);

    const {pathname} = useLocation();

    return (
        <div className={styles.layout}>
            <header>
                <div className={styles.branding}>
                <Link to="/" >
                    <img src="/campus-escape-logo.png" alt="logo-campus-escape" />
                </Link>
                <CartButton placeCount={placeCount} />
                </div>
                <div className={styles.navBar}>
                    <Link className={(pathname === "/restaurants") && styles.selectedPage} to="/restaurants">Restaurant</Link>
                    <Link className={(pathname === "/museums") && styles.selectedPage} to="/museums">Museum & Cinema</Link>
                    <Link className={(pathname === "/shops") && styles.selectedPage} to="/shops">Gift & Souvenir Shop</Link>
                    <Link className={(pathname === "/parks") && styles.selectedPage} to="/parks">Park & Playground</Link>
                </div>
            </header>
            <main className={styles.main}>
                <Outlet context={{setPlaceCount, myWeekend, setMyWeekend}} />
            </main>
            <footer className={styles.footer}>
                <p>© 2026 Soikat Saha. All rights reserved.</p>
                <a href="https://github.com/soikat27/campus-escape">
                    <img src={githubIcon} alt="github-icon" />
                    Source Code
                </a>
            </footer>
        </div>
    );
}
