import styles from "./ItemCart.module.css";
import PlaceInfo from "../PlaceInfo/PlaceInfo.jsx";
import useGroupSize from "../../hooks/useGroupSize.js";
import trashIcon from "../../assets/icon/trash-icon.png"

export default function ItemCart({placeId, name, address, category, website, phone, openingHours, groupSize, updateMyWeekend}) {
    const {draftGroupSize, setDraftGroupSize, validateGroupSize, resetIfInvalid} = useGroupSize();

    function updateGroupSize() {
        resetIfInvalid(groupSize);
        
        updateMyWeekend(prev => 
            prev.map(place => 
                (place.placeId === placeId)
                    ? {...place, groupSize: draftGroupSize}
                    : place
            )
        );
    }

    function decrementSize() {
        setDraftGroupSize(prev => Number(prev)+1);

        updateMyWeekend(prev => 
            prev.map(place => 
                (place.placeId === placeId)
                    ? {...place, groupSize: place.groupSize+1}
                    : place
            )
        );
    }

    function incrementSize() {
        setDraftGroupSize(prev => Number(prev)-1);

        updateMyWeekend(prev => 
            prev.map(place => 
                (place.placeId === placeId)
                    ? {...place, groupSize: place.groupSize-1}
                    : place
            )
        );
    }

    function removeFromMyWeekend() {
        updateMyWeekend(prev => {
            // 1. filter
            const nextData = prev.filter(place => place.placeId !== placeId);
            return nextData;
        });
    }

    return (
        <div className={styles.item}>
            <PlaceInfo
                name={name}
                address={address}
                category={category}
                website={website}
                phone={phone}
                openingHours={openingHours}
            >
                <div className={styles.people}>
                    <div className={styles.browseView}>
                        <label>
                            Group Size: 
                            <input 
                                type="number" 
                                name="people" 
                                value={draftGroupSize}
                                onChange={event => {
                                    setDraftGroupSize(event.target.value);
                                    validateGroupSize(event);
                                }}
                                onBlur={() => updateGroupSize()}
                            />
                        </label>
                        <div className={styles.buttonGroup}>
                            {(groupSize > 1) && 
                                <button onClick={decrementSize}>
                                    -
                                </button>
                            }
                            {<button onClick={incrementSize}>+</button>}   
                        </div>
                    </div>

                    <div className={styles.removeGroup}>
                        <button 
                            className={styles.removeButton}
                            onClick={removeFromMyWeekend}
                        >
                            Remove from My Weekend
                            <img className={styles.trashIcon} src={trashIcon} alt="delete-icon" />
                        </button>
                    </div>
                </div>
            </PlaceInfo>
        </div>
    );
}