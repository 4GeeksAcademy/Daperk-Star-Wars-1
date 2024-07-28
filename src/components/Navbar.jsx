import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";
import "../Navbar.css";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();
    const { favorites } = store;
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const handleRemoveFavorite = (url) => {
        const updatedFavorites = favorites.filter(fav => fav.url !== url);
        dispatch({ type: 'remove_favorite', payload: { url } });
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        const lowercasedQuery = searchQuery.toLowerCase();

        try {
            const peopleResponse = await fetch(`https://swapi.dev/api/people/?search=${lowercasedQuery}`);
            const peopleData = await peopleResponse.json();

            const vehiclesResponse = await fetch(`https://swapi.dev/api/vehicles/?search=${lowercasedQuery}`);
            const vehiclesData = await vehiclesResponse.json();

            const planetsResponse = await fetch(`https://swapi.dev/api/planets/?search=${lowercasedQuery}`);
            const planetsData = await planetsResponse.json();

            const results = [
                ...peopleData.results.map(person => ({ ...person, type: 'people' })),
                ...vehiclesData.results.map(vehicle => ({ ...vehicle, type: 'vehicles' })),
                ...planetsData.results.map(planet => ({ ...planet, type: 'planets' }))
            ];

            setSearchResults(results);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <nav className="navbar navbar-dark bg-black sticky-navbar">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1 text-warning" style={{ textDecoration: 'none' }}>
                        Star Wars
                    </span>
                </Link>
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item mx-2">
                        <Link className="nav-link text-warning" to="/planets">Planets</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link text-warning" to="/vehicles">Starships</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link text-warning" to="/people">People</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0 d-flex" onSubmit={handleSearchSubmit}>
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className="ml-auto">
                    <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
            <div className="container mt-3">
                {searchResults.length > 0 && (
                    <div>
                        <h3 className="text-warning">Search Results:</h3>
                        <ul>
                            {searchResults.map(result => (
                                <li key={result.url}>
                                    <Link className="text-warning" to={`/${result.type}Details/${result.url.split("/")[5]}`}>
                                        {result.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};
