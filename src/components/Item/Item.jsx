import { useState } from "react";
import styles from "./Item.module.css";
import locationIcon from "../../assets/icon/location-icon.png";

export default function Item({name, address, category, website, phone, openingHours}) {
    const [groupSize, setGroupSize] = useState(1);

    function validateInput(event) {
        // 1. clear custom validity
        const input = event.currentTarget;
        input.setCustomValidity("");

        // 2. enforce new validity rules
        const value = Number(input.value);
        if (!value || value < 1)
            input.setCustomValidity("Please enter a valid group. Group size must be a number greater than 0");

        // 3. report validity
        input.reportValidity();
    }
    
    return (
        <div className={styles.item}>
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
                            {website ? website : "Website Unavailable"}
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
                            <p className={styles.categoryItem}>{value}</p>
                        )
                    }
                </div>
                
                <div className={styles.people}>
                    <label>
                        Group Size: 
                        <input 
                            type="number" 
                            name="people" 
                            value={groupSize} 
                            onChange={event => {
                                setGroupSize(event.currentTarget.value);
                                validateInput(event);
                            }}
                            onBlur={event => {
                                if (!event.currentTarget.checkValidity())
                                    setGroupSize(1);
                                event.currentTarget.setCustomValidity("");
                            }}
                        />
                    </label>
                    <div className={styles.buttonGroup}>
                        {(groupSize > 1) && 
                            <button onClick={() => setGroupSize(prev => prev-1)}>
                                -
                            </button>
                        }
                        {<button onClick={() => setGroupSize(prev => prev+1)}>+</button>}   
                    </div>
                    <button className={styles.addButton}>Add to My Weekend</button>
                </div>
            </div>
        </div>
    );
}