import { CardItem } from "./CardItem"
import { Link } from "react-router-dom";
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';



export const VehiclesCard = ({ vehicle, img }) => {
    const { dispatch, store } = useGlobalReducer();
    const isFavorite = store.favorites.some(fav => fav.url === vehicle.url);
    const handleToggleFavorite = () => {
        if (isFavorite) {
            const updatedFavorites = store.favorites.filter(fav => fav.url !== vehicle.url);
            dispatch({ type: 'remove_favorite', payload: { url: vehicle.url } });
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            const updatedFavorites = [...store.favorites, { ...vehicle, type: 'vehicle' }];
            dispatch({ type: 'add_favorite', payload: { favorite: { ...vehicle, type: 'vehicle' } } });
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    };

    return <CardItem img={img}>
        <h5 class="card-title">{vehicle.name}</h5>
        <p>Model: {vehicle.model}</p>
        <p>Manufacturer: {vehicle.manufacturer}</p>
        <p>Cost: {vehicle.cost_in_credits}</p>
        <div className="d-flex justify-content-between">
            <Link to={`/vehicleDetails/${vehicle.url.split("/")[5]}`}>
                <button className="btn btn-primary">
                    Details
                </button>
            </Link>
            <button className="btn btn-warning" onClick={handleToggleFavorite}>
                <i className={`fas fa-heart ${isFavorite ? 'text-danger' : ''}`}></i>
            </button>
        </div>
    </CardItem>
}

