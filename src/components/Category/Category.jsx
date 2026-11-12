import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";
import Item from "../Item/Item.jsx";
import styles from "./Category.module.css";

const categories = {
    restaurants: {
        title: "Restaurants",
        description: "Cozy cafés for a study break, quick bites between classes, or a sit-down dinner when you want the evening to feel like a plan. Gettysburg runs from local coffee counters to historic taverns. Filter by what you're in the mood for!",
        img: () => import("../../assets/image/restaurant.jpg"),
        get: "https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=place:5198f2991cd54e53c05928ac4e933eea4340f00101f9013ee2020000000000c0020692030a47657474797362757267&lang=en&limit=15&apiKey=8f31fbdaf6c04f83a7eba498e40c527d"
    },
    museums: {
        title: "Museums & Cinema",
        description: "Spend a few hours with local history, a gallery stop, or a film when you need a break from screens of your own. Useful when the weather turns or you want something indoors that still feels like getting out.",
        img: () => import("../../assets/image/museum.jpg"),
        get: "https://api.geoapify.com/v2/places?categories=entertainment.museum,entertainment.cinema&filter=place:5198f2991cd54e53c05928ac4e933eea4340f00101f9013ee2020000000000c0020692030a47657474797362757267&lang=en&limit=15&apiKey=8f31fbdaf6c04f83a7eba498e40c527d"
    },
    shops: {
        title: "Gift & souvenir shops",
        description: "Pick up something small for home, a classmate, or a visitor. Grab Books, local goods, and gifts without a long drive to a mall. Handy before Parents Weekend or when you need one thoughtful stop downtown.",
        img: () => import("../../assets/image/souvenir-shop.jpg"),
        get: "https://api.geoapify.com/v2/places?categories=commercial.gift_and_souvenir&filter=place:5198f2991cd54e53c05928ac4e933eea4340f00101f9013ee2020000000000c0020692030a47657474797362757267&lang=en&limit=15&apiKey=8f31fbdaf6c04f83a7eba498e40c527d"
    },
    parks: {
        title: "Park & outdoor spaces",
        description: "Trade the usual loop for fresh air. Find paths, open green, and spots to sit with friends. Good for a reset between study blocks or a low-key Saturday that doesn't need a reservation.",
        img: () => import("../../assets/image/park.jpg"),
        get: "https://api.geoapify.com/v2/places?categories=natural&filter=place:5198f2991cd54e53c05928ac4e933eea4340f00101f9013ee2020000000000c0020692030a47657474797362757267&lang=en&limit=15&apiKey=8f31fbdaf6c04f83a7eba498e40c527d"
    }  
};

export default function Category() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState("#");

    const {category} = useParams();
    const {setPlaceCount, setMyWeekend} = useOutletContext();

    useEffect(() => {
        // effect:
        async function getImageUrl() {
            const imageModule = await categories[category].img();
            const imageUrl = imageModule.default;
            setImageUrl(imageUrl);
        }
        getImageUrl();

        async function fetchData() {
            try {
                const response = await fetch(categories[category].get);
                if (!response.ok)
                    throw new Error("Fetch failed! Please try again.");
                const data = await response.json();
                setData(data.features);
            } 
            catch(error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }  
        }
        fetchData();


        // cleanup:
        return () => {
            setData(null);
            setError(null);
            setLoading(true);
        }

    }, [category]);
    
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
                        <Item
                            key={item.properties.place_id}
                            placeId={item.properties.place_id}
                            name={item.properties.name}
                            address={(item.properties.address_line2) && item.properties.address_line2}
                            category={(item.properties.categories) && item.properties.categories}
                            website={(item.properties.website) && item.properties.website}
                            phone={(item.properties.contact && item.properties.contact.phone) &&  item.properties.contact.phone}
                            openingHours={(item.properties.opening_hours) && item.properties.opening_hours}
                            updatePlaceCount={setPlaceCount}
                            updateMyWeekend={setMyWeekend}
                        />)
                    )}
                </div>
            </div>
        );
}