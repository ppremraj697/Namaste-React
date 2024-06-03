import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [restaurantList, setRestaurantList] = useState(restaurantData);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="top-rated-restaurant btn"
                    onClick={() => {
                        const topRatedRestaurants = restaurantList.filter(
                            (res) => res.info.avgRating > 4.1
                        );
                        setRestaurantList(topRatedRestaurants)
                    }}>Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {
                    restaurantList.map((restaurant) => <RestaurantCard restaurantData={restaurant} key={restaurant.info.id} />)
                }
            </div>
        </div>
    )
}

export default Body;