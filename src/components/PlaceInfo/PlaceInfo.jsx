import locationIcon from "../../assets/icon/location-icon.png";
import styles from "./PlaceInfo.module.css";

export default function PlaceInfo({name, address, phone, website, openingHours, category, children}) {
    return (
        <>
            <div className={styles.icon}>
                <img src={locationIcon} alt="loaction-icon" />
            </div>
            <div className={styles.details}>
                <h4>
                    <span className={styles.fieldLabel}>Name:</span>{" "}
                    <span className={name ? styles.value : styles.unavailable}>
                        {name ? name : "Place Unavailable"}
                    </span>
                </h4>
                <p>
                    <span className={styles.fieldLabel}>Address:</span>{" "}
                    <span className={address ? styles.value : styles.unavailable}>
                        {address ? address : "Address Unavailable"}
                    </span>
                </p>
                <h6>Contacts</h6>
                <div className={styles.detailsContacts}>
                    <p>
                        <span className={styles.fieldLabel}>Phone:</span>{" "}
                        <span className={phone ? styles.value : styles.unavailable}>
                            {phone ? phone : "Phone Unavailable"}
                        </span>
                    </p>
                    <p>
                        <span className={styles.fieldLabel}>Website:</span>{" "}
                        <span className={website ? styles.value : styles.unavailable}>
                            {website ? 
                                <a className={styles.websiteLink} href={website} target="_blank" rel="noopener noreferrer">{website}</a>
                                    :
                                "Website Unavailable"
                            }
                        </span>
                    </p>
                </div>
                <p>
                    <span className={styles.fieldLabel}>Opening Hours:</span>{" "}
                    <span className={openingHours ? styles.value : styles.unavailable}>
                        {openingHours ? openingHours : "Hours Unavailable"}
                    </span>
                </p>
                <h6>Categories</h6>
                <div className={styles.detailsCaterories}>
                    {!category ? 
                        "Categories unavailable" :
                        category.map(value => 
                            <p key={value} className={styles.categoryItem}>{value}</p>
                        )
                    }
                </div>
                {children}
            </div>
        </>
    );
}
