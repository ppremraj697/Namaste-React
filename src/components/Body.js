import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    //Whenever state variables update, React triggers a reconciliation cycle(re-renders the component).
    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6486772&lng=73.7592659&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //Optional Chaining
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log("restaurant list", restaurantList)
    }

    //Conditional Rendering
    if (restaurantList.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            console.log(searchText)
                            const searchedRestaurants = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurantList(searchedRestaurants);
                        }}>Search
                    </button>
                </div>
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
                {filteredRestaurantList.map((restaurant) => <RestaurantCard restaurantData={restaurant} key={restaurant.info.id} />)}
            </div>
        </div>
    )
}

export default Body;