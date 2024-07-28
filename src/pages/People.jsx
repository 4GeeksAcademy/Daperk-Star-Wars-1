import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { PeopleCard } from "../components/PeopleCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const People = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        const loadData = async () => {
            const peopleResp = await fetch("https://swapi.dev/api/people");
            if (peopleResp.ok) {
                const peopleBody = await peopleResp.json();
                dispatch({
                    type: "load_people",
                    people: peopleBody.results,
                });
            }
        };

        loadData();

        // Load favorites from local storage
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        dispatch({
            type: "load_favorites",
            favorites: savedFavorites,
        });
    }, [dispatch]);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Characters</h1>
            <div className="row">
                {store.people.map(person => (
                    <div key={person.url} className="col-md-4 mb-4">
                        <PeopleCard person={person} img="https://placehold.co/600x400" />
                    </div>
                ))}
            </div>
        </div>
    );
};