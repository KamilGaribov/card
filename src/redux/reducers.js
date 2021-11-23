const INITIAL_STATE = {
  breadcrumbs: ["home"],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_BREADCRUMBS":
      return { ...state, breadcrumbs: action.payload };
    default:
      return state;
  }
};

export default reducer;
