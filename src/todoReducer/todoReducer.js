export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((x) => x.id !== action.payload);
    case "toggle":
      return state.map((x) =>
        x.id === action.payload ? { ...x, done: !x.done } : x
      );

    default:
      return state;
  }
};
