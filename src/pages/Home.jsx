import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { PeopleCard } from "../components/PeopleCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";
import { VehiclesCard } from "../components/VehiclesCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
        const loadData = async () => {
            const peopleResp = await fetch("https://swapi.dev/api/people");
            const planetsResp = await fetch("https://swapi.dev/api/planets");
            const vehiclesResp = await fetch("https://swapi.dev/api/starships");
            if (peopleResp.ok && planetsResp.ok && vehiclesResp.ok) {
                const peopleBody = await peopleResp.json();
                const planetsBody = await planetsResp.json();
                const vehiclesBody = await vehiclesResp.json();
                dispatch({
                    type: "load_people",
                    people: peopleBody.results,
                });
                dispatch({
                    type: "load_planet",
                    planet: planetsBody.results,
                });
                dispatch({
                    type: "load_vehicles",
                    vehicles: vehiclesBody.results,
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
		<>
			<div className="container">
				<h1>Characters</h1>
			<div className="scroll-container">
				{store.people.map(person => <PeopleCard person={person} img="https://placehold.co/600x400" />)}
			</div>
			</div>
			<div className="container">
				<h1>Starships</h1>
			<div className="scroll-container">
				{store.vehicles.map(vehicle => <VehiclesCard vehicle={vehicle} img="https://placehold.co/600x400" />)}
			</div>
			</div>
			<div className="container">
				<h1>Planets</h1>
			<div className="scroll-container">
				{store.planet.map(planet => <PlanetCard planet={planet} img="https://placehold.co/600x400" />)}
			</div>
			</div>
		</>
	);
}; 