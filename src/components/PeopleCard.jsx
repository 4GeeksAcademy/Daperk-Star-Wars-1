import { CardItem } from "./CardItem"


export const PeopleCard = ({person, img}) => {
    return <CardItem img={img}>
    <h5 class="card-title">{person.name}</h5>
    <p>height: {person.height}</p>
    <p>mass: {person.mass}</p>
    <p>hair color: {person.hair_color}</p>
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