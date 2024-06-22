
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const VehicleDetails = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const vehicleResp = await fetch(`https://swapi.dev/api/starships/${id}/`);
            if (vehicleResp.ok) {
                const vehicleData = await vehicleResp.json();
                setVehicle(vehicleData);
                dispatch({
                    type: "load_vehicle",
                    vehicle: vehicleData
                });
            }
        };
        loadData();
    }, [id, dispatch]);

    if (!vehicle) return <div>Loading...</div>;

    return (
        <>
            <div className="container">
                <div className="card m-3" style={{ width: "100%", height: "720px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://placehold.co/720x1200" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p>model: {vehicle.model}</p>
                                <p>manufacturer: {vehicle.manufacturer}</p>
                                <p>cost in credits: {vehicle.cost_in_credits}</p>
                                <p>length: {vehicle.length}</p>
                                <p>max atmosphering speed: {vehicle.max_atmosphering_speed}</p>
                                <p>crew: {vehicle.crew}</p>
                                <p>passengers: {vehicle.passengers}</p>
                                <p>cargo capacity: {vehicle.cargo_capacity}</p>
                                <p>consumables: {vehicle.consumables}</p>
                                <p>hyperdrive rating: {vehicle.hyperdrive_rating}</p>
                                <p>MGLT: {vehicle.MGLT}</p>
                                <p>starship class: {vehicle.starship_class}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
