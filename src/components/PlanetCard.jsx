import { CardItem } from "./CardItem"

export const PlanetCard = ({planets, img}) => {

    return <CardItem img={img}>
    <h5 class="card-title">{planets.name}</h5>
    <p>Rotation: {planets.rotation_period}</p>
    <p>Orbital: {planets.orbital_period}</p>
    <p>Diameter: {planets.diameter}</p>
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

