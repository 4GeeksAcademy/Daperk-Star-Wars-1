export const initialStore = () => {
  return {
    favorites: [],
    people: [],
    vehicles: [],
    planets: [],
    person: {},
    vehicle: {}
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'load_people':
      const { people } = action
      return {
        ...store,
        people: people
      }
    case 'load_vehicles':
      const { vehicles } = action
      return {
        ...store,
        vehicles: vehicles
      }
    case 'load_planets':
      const { planets } = action
      return {
        ...store,
        planets: planets
      }
    case 'load_person':
      const { person } = action;
      return {
        ...store,
        person: person
      };
    case 'load_vehicle':
      const { vehicle } = action;
      return {
        ...store,
        vehicle: vehicle
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
    case 'add_task':
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      }
    default:
      return store;
  }
}
