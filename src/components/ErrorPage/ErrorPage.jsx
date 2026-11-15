import { Link } from "react-router"; 
import spookyIcon from "../../assets/icon/pumpkin-icon.png";

export default function ErrorPage() {
    return (
        <div className={styles.errorDiv}>
            <div className={styles.textContent}>
                <p className={styles.title}>Opps! Looks like we hit a deadend!</p>
                <img src={spookyIcon} alt="pumpkin-spooky-icon" />
                <p className={styles.subtitle}>This place looks spooky! Let's go back to <span>Home</span> page!</p>
            </div>
            <div className={styles.button}>
                <button>
                    <Link to="/">Home</Link>
                </button>
            </div>
        </div>
    );
}