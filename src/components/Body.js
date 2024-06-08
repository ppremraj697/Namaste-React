import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6486772&lng=73.7592659&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

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