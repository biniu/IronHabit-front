
export default function QuestReducer(state, action) {
  switch (action.type) {
    case "GET_QUEST":
      return {
        ...state,
        quests: action.payload
      };
    case "ADD_QUEST":
      const addedTodos = [...state.quests, action.payload];
      return {
        ...state,
        quests: addedTodos
      };
    case "SET_CURRENT_QUEST":
      return {
        ...state,
        currentTodo: action.payload
      };
    case "TOGGLE_QUEST":
      const toggledTodos = state.quests.map(t =>
        t.id === action.payload.id ? action.payload : t
      );
      return {
        ...state,
        quests: toggledTodos
      };
    case "UPDATE_QUEST":
      const updatedTodo = { ...action.payload };
      const updatedTodoIndex = state.quests.findIndex(
        t => t.id === state.currentTodo.id
      );
      const updatedTodos = [
        ...state.quests.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.quests.slice(updatedTodoIndex + 1)
      ];
      return {
        ...state,
        currentTodo: {},
        quests: updatedTodos
      };
    case "REMOVE_QUEST":
      const filteredTodos = state.quests.filter(t => t.id !== action.payload.id);
      return {
        ...state,
        quests: filteredTodos
      };
    default:
      return state;
  }
}
