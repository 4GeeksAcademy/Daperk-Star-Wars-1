import { CardItem } from "./CardItem"
import { Link } from "react-router-dom";


export const VehiclesCard = ({ vehicle, img }) => {

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
            <button className="btn btn-warning">
                <i className="fas fa-heart"></i>
            </button>
        </div>
    </CardItem>
}

