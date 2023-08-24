import { SET_JOB, ADD_JOB, DELETE_JOB, UPDATE_JOB, SEARCH_JOB } from "./action";

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);

      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    case UPDATE_JOB:
      const newJobs_1 = [...state.jobs];
      newJobs_1.splice(action.payload.index, 1, action.payload.value);

      newState = {
        ...state,
        jobs: newJobs_1,
      };
      console.log(newState);
      break;
    case SEARCH_JOB:
      const items = [...state.jobs];
      const new_items = items.filter((item) => item.includes(action.payload));

      newState = {
        ...state,
        jobs: new_items,
      };
      break;
    default:
      throw new Error("Error");
  }
  return newState;
};

export { reducer };
