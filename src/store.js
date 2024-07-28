export const initialStore = () => {
  return {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    people: [],
    vehicles: [],
    planet: [],
    person: {},
    vehicle: {}
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'load_people':
      return {
        ...store,
        people: action.people
      };
    case 'load_vehicles':
      return {
        ...store,
        vehicles: action.vehicles
      };
    case 'load_planet':
      return {
        ...store,
        planet: action.planet
      };
    case 'load_favorites':
      return {
        ...store,
        favorites: action.favorites
      };
    case 'add_favorite':
      return {
        ...store,
        favorites: [...store.favorites, action.payload.favorite]
      };
    case 'remove_favorite':
      return {
        ...store,
        favorites: store.favorites.filter(item => item.url !== action.payload.url)
      };
    default:
      return store;
  }
}