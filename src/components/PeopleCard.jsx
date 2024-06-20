import { CardItem } from "./CardItem"
import { useEffect, useState } from "react";


export const PeopleCard = ({person, img}) => {
const [characters, setCharacters] = useState()
    return <CardItem img={img}>
    <h5 class="card-title">{person.name}</h5>
    <p>height: {person.height}</p>
    <p>mass: {person.mass}</p>
    <p>hair color: {person.hair_color}</p>
    </CardItem>
}