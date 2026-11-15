import { Link } from "react-router"; 
import spookyIcon from "../../assets/icon/pumpkin-icon.png";
import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
    return (
        <div className={styles.errorDiv}>
            <div className={styles.textContent}>
                <p className={styles.title}>Opps! Looks like we hit a deadend!</p>
                <img src={spookyIcon} alt="pumpkin-spooky-icon" />
                <p className={styles.subtitle}>This place looks spooky! Let's go back to <span>Home</span> page!</p>
            </div>
            <Link className={styles.homeLink} to="/">Home</Link>
        </div>
    );
}