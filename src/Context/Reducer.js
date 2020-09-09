export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":

      return {
        ...state,
        array: [...state.array, action.payload],
      };
      case "EMPTY_CART":
      return {
        ...state,
        array:[]
      };
    default:
      return state;
  }
};
