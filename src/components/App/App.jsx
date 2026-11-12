import {Link, Outlet} from 'react-router';
import CartButton from "../CartButton/CartButton.jsx";
import githubIcon from "../../assets/icon/github-icon.svg";
import styles from './App.module.css';
import { useState } from 'react';

export default function App() {
    const [placeCount, setPlaceCount] = useState(0);
    // currentPage legend: 0 --> "/"; 1 --> "/museums"; 2 --> "/"; 3 --> "/shops"; 4 --> "/parks"
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div className={styles.layout}>
            <header>
                <div className={styles.branding}>
                <Link to="/" onClick={() => setCurrentPage(0)}>
                    <img src="/campus-escape-logo.png" alt="logo-campus-escape" />
                </Link>
                <CartButton placeCount={placeCount} />
                </div>
                <div className={styles.navBar}>
                    <Link className={(currentPage === 1) && styles.selectedPage} to="/restaurants" onClick={() => setCurrentPage(1)}>Restaurant</Link>
                    <Link className={(currentPage === 2) && styles.selectedPage} to="/museums" onClick={() => setCurrentPage(2)}>Museum & Cinema</Link>
                    <Link className={(currentPage === 3) && styles.selectedPage} to="/shops" onClick={() => setCurrentPage(3)}>Gift & Souvenir Shop</Link>
                    <Link className={(currentPage === 4) && styles.selectedPage} to="/parks" onClick={() => setCurrentPage(4)}>Park & Playground</Link>
                </div>
            </header>
            <main className={styles.main}>
                <Outlet context={setPlaceCount} />
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
