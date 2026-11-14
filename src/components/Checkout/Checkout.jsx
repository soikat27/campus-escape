import useMyWeekendContext from "../../hooks/useMyWeekendContext";
import ItemCart from "../ItemCart/ItemCart.jsx";
import styles from "./Checkout.module.css";

export default function Checkout() {
    const {myWeekend, setMyWeekend} = useMyWeekendContext();

    if (myWeekend.length === 0) {
        return (
            <div className={styles.empty}>
                <p className={styles.emptyTitle}>Your weekend plan looks empty!</p>
                <p className={styles.emptySubtitle}>
                    You can always browse your favourite category and add places you would like to explore.
                </p>
            </div>
        );
    }
    return (
        <div className={styles.checkout}>
            <h6>Your Weekend plan</h6>
            <div className={styles.places}>
                {
                    myWeekend.map(place => 
                        <ItemCart
                            key={place.placeId}
                            placeId={place.placeId}
                            name={place.name}
                            address={place.address}
                            category={place.category}
                            website={place.website}
                            phone={place.phone}
                            openingHours={place.openingHours}
                            groupSize={place.groupSize}
                            updateMyWeekend={setMyWeekend}
                        />
                    )
                }
            </div>
        </div>
    );
}