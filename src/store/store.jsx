import { createStore } from "redux";

const initialState = {
  courses: [],
  error: null,
  isPending: false,
};
const coursesReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(coursesReducer);
