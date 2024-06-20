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
