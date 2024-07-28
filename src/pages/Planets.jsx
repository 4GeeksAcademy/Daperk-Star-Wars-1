import { PlanetCard } from "../components/PlanetCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const Planets = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        const loadData = async () => {
            const planetsResp = await fetch("https://swapi.dev/api/planets");
            if (planetsResp.ok) {
                const planetsBody = await planetsResp.json();
                dispatch({
                    type: "load_planet",
                    planet: planetsBody.results,
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
            <h1 className="text-center mb-4">Planets</h1>
            <div className="row">
                {store.planet.map((planet) => (
                    <div key={planet.url} className="col-md-4 mb-4">
                        <PlanetCard planet={planet} img="https://placehold.co/600x400" />
                    </div>
                ))}
            </div>
        </div>
    );
};
