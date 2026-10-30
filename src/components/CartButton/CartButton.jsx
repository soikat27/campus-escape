import {Link} from "react-router";
import styles from "./CartButton.module.css";
import cartIcon from "../../assets/icon/cart-icon.svg";

export default function CardButton({placeCount}) {
    return (
        <div className={styles.cartButton}>
            <Link className={styles.link}>
                <div className={styles.iconGroup}>
                    <img className={styles.icon} src={cartIcon} alt="cart-icon" />
                    <div className={styles.badge}>
                        <p>{placeCount}</p>
                    </div>
                </div>
                <p className={styles.cartTitle}>My Weekend</p>
            </Link>
        </div>
    );
}
