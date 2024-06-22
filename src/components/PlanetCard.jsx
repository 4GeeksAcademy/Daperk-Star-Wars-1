import React from 'react';
import { CardItem } from "./CardItem";
import { Link } from "react-router-dom";
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

export const PlanetCard = ({ planet, img }) => {
    const { dispatch, store } = useGlobalReducer();
    const isFavorite = store.favorites.some(fav => fav.url === planet.url);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: 'remove_favorite', payload: { url: planet.url } });
        } else {
            dispatch({ type: 'add_favorite', payload: { favorite: { ...planet, type: 'planet' } } });
        }
    };

    return (
        <CardItem img={img}>
            <h5 className="card-title">{planet.name}</h5>
            <p>Climate: {planet.climate}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Gravity: {planet.gravity}</p>
            <div className="d-flex justify-content-between">
                <Link to={`/planetDetails/${planet.url.split("/")[5]}`}>
                    <button className="btn btn-primary">
                        Details
                    </button>
                </Link>
                <button className="btn btn-warning" onClick={handleToggleFavorite}>
                    <i className={`fas fa-heart ${isFavorite ? 'text-danger' : ''}`}></i>
                </button>
            </div>
        </CardItem>
    );
};
