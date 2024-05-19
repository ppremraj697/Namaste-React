import { CARD_IMG } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {

    const { restaurantData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = restaurantData?.info;

    return (
        <div className="restaurant-card" style={styleCard}>
            <img alt="res-img" className="res-img" src={CARD_IMG + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p>{sla.deliveryTime} minutes</p>
            <p>{costForTwo}</p>
        </div>
    )
}

export default RestaurantCard;