import { Dispatch } from "redux";

export const updateBreadcrumbs = (path) => (dispatch) => {
  return dispatch({ type: "UPDATE_BREADCRUMBS", payload: path });
};
