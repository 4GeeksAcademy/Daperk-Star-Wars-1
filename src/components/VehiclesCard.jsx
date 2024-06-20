import { CardItem } from "./CardItem"

export const VehiclesCard = ({vehicles, img}) => {

    return <CardItem img={img}>
    <h5 class="card-title">{vehicles.name}</h5>
    <p>Model: {vehicles.model}</p>
    <p>Manufacturer: {vehicles.manufacturer}</p>
    <p>Cost: {vehicles.cost_in_credits}</p>
    <div className="d-flex justify-content-between">
        <button className="btn btn-primary">
            Details
        </button>
        <button className="btn btn-warning">
        <i className="fas fa-heart"></i>
        </button>
    </div>
    </CardItem>
}

