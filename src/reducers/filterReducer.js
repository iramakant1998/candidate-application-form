// src/reducers/filterReducer.js
const initialState = {
    filters: {
      minExperience: 0,
      companyName: '',
      location: '',
      remote: false,
      techStack: '',
      role: '',
      minBasePay: 0,
    },
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
  