import { Link } from "react-router-dom";
import { PeopleCard } from "../components/PeopleCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";
import { VehiclesCard } from "../components/VehiclesCard.jsx";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><h1>Star Wars</h1></span>
				</Link>
				<div className="ml-auto">
					<div class="dropdown">
						<button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown button
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};