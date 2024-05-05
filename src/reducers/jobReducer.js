// src/reducers/jobReducer.js
const initialState = {
    jobs: [],
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_JOBS':
        return {
          ...state,
          jobs: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  