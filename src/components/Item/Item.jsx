import { useState } from "react";
import styles from "./Item.module.css";
import locationIcon from "../../assets/icon/location-icon.png";

export default function Item({name, address, category, website, phone, openingHours}) {
    const [people, setPeople] = useState(1);

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
                <h4>Name: {name ? name : "Place Unavailable"}</h4>
                <p>Address: {address ? address : "Address Unavailable"}</p>
                <h6>Contacts</h6>
                <div className={styles.detailsContacts}>
                    <p>Phone: {phone ? phone : "Phone Unavailable"}</p>
                    <p>Website: {website ? website : "Website Unavailable"}</p>
                </div>
                <p>Opening Hours: {openingHours ? openingHours : "Hours Unavailable"}</p>
                <h6>Categories</h6>
                <div className={styles.detailsCaterories}>
                    {!category ? 
                        "Categories unavailable" :
                        category.map(value => {
                            <p className={styles.categoryItem}>{value}</p>
                        })
                    }
                </div>
                
                <div className={styles.people}>
                    <label>
                        Group Size: 
                        <input 
                            type="number" 
                            name="people" 
                            value={people} 
                            onChange={event => {
                                validateInput(event);
                                if (event.currentTarget.checkValidity())
                                    setPeople(event.currentTarget.value);
                            }}
                        />
                    </label>
                    <div className={styles.buttonGroup}>
                        {(people > 1) && 
                            <button onClick={() => setPeople(prev => prev-1)}>
                                -
                            </button>
                        }
                        {<button onClick={() => setPeople(prev => prev+1)}>+</button>}   
                    </div>
                    <button className={styles.addButton}>Add to My Weekend</button>
                </div>
            </div>
        </div>
    );
}