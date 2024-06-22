import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PeopleDetails = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const peopleResp = await fetch(`https://swapi.dev/api/people/${id}/`);
            if (peopleResp.ok) {
                const personData = await peopleResp.json();
                setPerson(personData);
                dispatch({
                    type: "load_person",
                    person: personData
                });
            }
        };
        loadData();
    }, [id, dispatch]);

    const isFavorite = store.favorites.some(fav => fav.url === person?.url);

    const handleToggleFavorite = () => {
        if (person) {
            if (isFavorite) {
                dispatch({ type: 'remove_favorite', payload: { url: person.url } });
            } else {
                dispatch({ type: 'add_favorite', payload: { favorite: { ...person, type: 'people' } } });
            }
        }
    };

    if (!person) return <div>Loading...</div>;

    return (
        <div className="container">
            <div className="card m-3" style={{ width: "100%", height: "720px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://placehold.co/720x1200" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <p>Height: {person.height}</p>
                            <p>Mass: {person.mass}</p>
                            <p>Hair Color: {person.hair_color}</p>
                            <p>Skin Color: {person.skin_color}</p>
                            <p>Eye Color: {person.eye_color}</p>
                            <p>Birth Year: {person.birth_year}</p>
                            <p>Gender: {person.gender}</p>
                            <p>Homeworld: {person.homeworld}</p>
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
