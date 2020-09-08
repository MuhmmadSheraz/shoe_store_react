export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("Reducer***",state);
      console.log("Reducer***",action.payload);

      return {
        ...state,
        array: [...state.array, action.payload],
      };
    default:
      return state;
  }
};
