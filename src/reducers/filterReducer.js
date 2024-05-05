// src/reducers/filterReducer.js
const initialState = {
    filters: {},
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FILTERS':
        return {
          ...state,
          filters: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  