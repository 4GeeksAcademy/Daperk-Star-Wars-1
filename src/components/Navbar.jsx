import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const { favorites } = store;

	const handleRemoveFavorite = (url) => {
		dispatch({ type: 'remove_favorite', payload: { url } });
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><h1>Star Wars</h1></span>
				</Link>
				<div className="ml-auto">
					<div class="dropdown">
						<button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
                            {favorites.length === 0 ? (
                                <li><span className="dropdown-item">No favorites added yet.</span></li>
                            ) : (
                                favorites.map(fav => (
                                    <li key={fav.url}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link className="dropdown-item" to={`/${fav.type}Details/${fav.url.split("/")[5]}`}>{fav.name}</Link>
                                            <button className="btn btn-sm btn-danger" onClick={() => handleRemoveFavorite(fav.url)}>
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </li>
                                ))
                            )}
                        </ul>
					</div>
				</div>
			</div>
		</nav>
	);
};