export const initialStore = () => {
  return {
    favorites: [],
    people: [],
    vehicles: [],
    planets: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'load_people':
      const {people} = action

      return {
        ...store,
        people: people
      }
      case 'load_vehicles':
        const {vehicles} = action 
        return{
          ...store,
          vehicles: vehicles
        }
        case 'load_planets':
        const {planets} = action 
        return{
          ...store,
          planets: planets
        }

    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }
}
