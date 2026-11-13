import { useOutletContext } from "react-router";
import ItemBrowse from "../ItemBrowse/ItemBrowse.jsx";
import styles from "./Category.module.css";
import useCategoryFetch from "../../hooks/useCategoryFetch.js";

export default function Category() {
    const {categories, category, data, error, loading, imageUrl} = useCategoryFetch();
    const {myWeekend, setMyWeekend} = useOutletContext();

    function isSelected(placeId) {
        return myWeekend.some(place => (
            place.placeId === placeId
        ));
    }

    function getGroupSize(placeId) {
        if (isSelected(placeId)) {
            const place = myWeekend.find(place => place.placeId === placeId);
            return place.groupSize;
        }
        return 1;
    }
    
    if (loading === true)
        return <div className={styles.status}>Loading...</div>
    else if (error)
        return <div className={`${styles.status} ${styles.statusError}`}>{`${error.name}: ${error.message}`}</div>
    else
        return (
            <div>
                <div className={styles.header}>
                    <div className={styles.content}>
                        <h3>{categories[category].title} at Gettysburg</h3>
                        <p>
                            {categories[category].description}
                        </p>
                    </div>
                    <div className={styles.img}>
                        <img src={imageUrl} alt={`${category}-image`} />
                    </div>
                </div>
                <div className={styles.items}>
                    {data && data.map(item =>
                        (item.properties.name &&
                        <ItemBrowse
                            key={item.properties.place_id}
                            placeId={item.properties.place_id}
                            name={item.properties.name}
                            address={(item.properties.address_line2) && item.properties.address_line2}
                            category={(item.properties.categories) && item.properties.categories}
                            website={(item.properties.website) && item.properties.website}
                            phone={(item.properties.contact && item.properties.contact.phone) &&  item.properties.contact.phone}
                            openingHours={(item.properties.opening_hours) && item.properties.opening_hours}
                            isSelected={isSelected(item.properties.place_id)}
                            groupSize={getGroupSize(item.properties.place_id)}
                            updateMyWeekend={setMyWeekend}
                        />)
                    )}
                </div>
            </div>
        );
}