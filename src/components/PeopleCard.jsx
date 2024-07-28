import React from 'react';
import { CardItem } from "./CardItem";
import { Link } from "react-router-dom";
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

export const PeopleCard = ({ person, img }) => {
    const { dispatch, store } = useGlobalReducer();
    const isFavorite = store.favorites.some(fav => fav.url === person.url);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            const updatedFavorites = store.favorites.filter(fav => fav.url !== person.url);
            dispatch({ type: 'remove_favorite', payload: { url: person.url } });
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            const updatedFavorites = [...store.favorites, { ...person, type: 'people' }];
            dispatch({ type: 'add_favorite', payload: { favorite: { ...person, type: 'people' } } });
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    };

    return (
        <CardItem img={img}>
            <h5 className="card-title">{person.name}</h5>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <div className="d-flex justify-content-between">
                <Link to={`/peopleDetails/${person.url.split("/")[5]}`}>
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
