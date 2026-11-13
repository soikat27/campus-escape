import styles from "./ItemBrowse.module.css";
import PlaceInfo from "../PlaceInfo/PlaceInfo.jsx";
import useGroupSize from "../../hooks/useGroupSize";

export default function ItemBrowse({placeId, name, address, category, website, phone, openingHours, isSelected, groupSize, updateMyWeekend}) {
    const {draftGroupSize, setDraftGroupSize, validateGroupSize, resetIfInvalid} = useGroupSize(groupSize);

    function addToMyWeekend() {
        if (isSelected)
            return;

        // 1. add to myWeekend list
        const newPlace = {
            placeId: placeId,
            name: name,
            address: address,
            category: category,
            website: website,
            phone: phone,
            openingHours: openingHours,
            groupSize: Number(draftGroupSize)
        };
        updateMyWeekend(prev => (
            [...prev, newPlace]
        ));
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
                    {(isSelected) ?
                        <div className={styles.cartView}>
                            Group Size: <span className={styles.cartSize}>{draftGroupSize}</span>
                        </div>
                            :
                        <div className={styles.browseView}>
                            <label>
                                Group Size: 
                                <input 
                                    type="number" 
                                    name="people" 
                                    value={draftGroupSize}
                                    onChange={event => {
                                        setDraftGroupSize(event.currentTarget.value);
                                        validateGroupSize(event);
                                    }}
                                    onBlur={event => {
                                        resetIfInvalid(event, 1);
                                    }}
                                />
                            </label>
                            <div className={styles.buttonGroup}>
                                {(draftGroupSize > 1) && 
                                    <button onClick={() => setDraftGroupSize(prev => Number(prev)-1)}>
                                        -
                                    </button>
                                }
                                {<button onClick={() => setDraftGroupSize(prev => Number(prev)+1)}>+</button>}   
                            </div>
                        </div>
                    }
                    <div className={styles.addGroup}>
                        {isSelected && <span className={styles.check}>&#10003;</span>}
                        <button 
                            className={`${styles.addButton} ${isSelected ? styles.selected : ""}`}
                            onClick={addToMyWeekend}
                            disabled={isSelected}
                        >
                            Add to My Weekend
                        </button>
                    </div>
                </div>
            </PlaceInfo>
        </div>
    );
}
