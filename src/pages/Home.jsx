import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CardItem } from "../components/CardItem.jsx";
import { PeopleCard } from "../components/PeopleCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		const loadData = async () => {
			const resp = await fetch("https://swapi.dev/api/people")
			if (resp.ok) {
				const body = await resp.json();
				dispatch({
					type: "load_people",
					people: body.results
				});
			}}
			loadData()
		})
	return (
		<>
			<div className="text-center mt-5">
				<CardItem img="https://placehold.co/600x400">
					{/* <h5 class="card-title">{people1.name}</h5>
					<p>height: {people1.height}</p>
					<p>mass: {people1.mass}</p>
					<p>hair color: {people1.hair_color}</p> */}
				</CardItem>
			</div>
			<div className="d-flex">
				{store.people.map(person => <PeopleCard person={person} img="https://placehold.co/600x400" />)}
			</div>
		</>
	);
}; 