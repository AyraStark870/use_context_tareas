export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((x) => x.id !== action.payload);

    default:
      return state;
  }
};
