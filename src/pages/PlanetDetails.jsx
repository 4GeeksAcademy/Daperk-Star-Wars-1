import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PlanetDetails = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const planetResp = await fetch(`https://swapi.dev/api/planets/${id}/`);
            if (planetResp.ok) {
                const planetData = await planetResp.json();
                setPlanet(planetData);
                dispatch({
                    type: "load_planet",
                    planet: planetData
                });
            }
        };
        loadData();
    }, [id, dispatch]);

    const isFavorite = store.favorites.some(fav => fav.url === planet?.url);

    const handleToggleFavorite = () => {
        if (planet) {
            if (isFavorite) {
                dispatch({ type: 'remove_favorite', payload: { url: planet.url } });
            } else {
                dispatch({ type: 'add_favorite', payload: { favorite: { ...planet, type: 'planet' } } });
            }
        }
    };

    if (!planet) return <div>Loading...</div>;

    return (
        <div className="container">
            <div className="card m-3" style={{ width: "100%", height: "720px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://placehold.co/720x1200" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{planet.name}</h5>
                            <p>Climate: {planet.climate}</p>
                            <p>Diameter: {planet.diameter}</p>
                            <p>Gravity: {planet.gravity}</p>
                            <p>Orbital Period: {planet.orbital_period}</p>
                            <p>Population: {planet.population}</p>
                            <button className="btn btn-warning" onClick={handleToggleFavorite}>
                                <i className={`fas fa-heart ${isFavorite ? 'text-danger' : ''}`}></i> {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
