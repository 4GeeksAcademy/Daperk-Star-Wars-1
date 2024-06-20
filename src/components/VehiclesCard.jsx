import { CardItem } from "./CardItem"

export const VehiclesCard = ({vehicle, img}) => {

    return <CardItem img={img}>
    <h5 class="card-title">{vehicle.name}</h5>
    <p>height: {vehicle.height}</p>
    <p>mass: {vehicle.mass}</p>
    <p>hair color: {vehicle.hair_color}</p>
    </CardItem>
}