import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {
                    restaurantData.map((restaurant) => <RestaurantCard restaurantData={restaurant} key={restaurant.info.id} />)
                }
            </div>
        </div>
    )
}

export default Body;