import { VehiclesCard } from "../components/VehiclesCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const Vehicles = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        const loadData = async () => {
            const vehiclesResp = await fetch("https://swapi.dev/api/starships");
            if (vehiclesResp.ok) {
                const vehiclesBody = await vehiclesResp.json();
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
        <div className="container mt-5">
            <h1 className="text-center mb-4">Vehicles</h1>
            <div className="row">
                {store.vehicles.map((vehicle) => (
                    <div key={vehicle.url} className="col-md-4 mb-4">
                        <VehiclesCard vehicle={vehicle} img="https://placehold.co/600x400" />
                    </div>
                ))}
            </div>
        </div>
    );
};
