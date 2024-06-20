import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CardItem } from "../components/CardItem.jsx";
import { PeopleCard } from "../components/PeopleCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const people1 = {
		"name": "Luke Skywalker",
		"height": "172",
		"mass": "77",
		"hair_color": "blond",
		"skin_color": "fair",
		"eye_color": "blue",
		"birth_year": "19BBY",
		"gender": "male",
		"homeworld": "https://swapi.dev/api/planets/1/",
		"films": [
			"https://swapi.dev/api/films/1/",
			"https://swapi.dev/api/films/2/",
			"https://swapi.dev/api/films/3/",
			"https://swapi.dev/api/films/6/"
		],
		"species": [],
		"vehicles": [
			"https://swapi.dev/api/vehicles/14/",
			"https://swapi.dev/api/vehicles/30/"
		],
		"starships": [
			"https://swapi.dev/api/starships/12/",
			"https://swapi.dev/api/starships/22/"
		],
		"created": "2014-12-09T13:50:51.644000Z",
		"edited": "2014-12-20T21:17:56.891000Z",
		"url": "https://swapi.dev/api/people/1/"
	}
	return (
		<>
			<div className="text-center mt-5">
				<CardItem img="https://placehold.co/600x400">
					<h5 class="card-title">{people1.name}</h5>
					<p>height: {people1.height}</p>
					<p>mass: {people1.mass}</p>
					<p>hair color: {people1.hair_color}</p>
				</CardItem>
			</div>
			<div>
				<PeopleCard person={people1} img="https://placehold.co/600x400"/>
			</div>
		</>
	);
}; 