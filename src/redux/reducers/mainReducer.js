
const initialState = {
  loaded: false,
  currentRoute: ''
};


// MAIN PAGE CONTENT REDUCER
export function _mainPage(state = initialState, action = {}) {
  switch (action.type) {
    case 'GET_MAIN_PAGE_REQUEST':
      return {
        ...state,
        loaded: false
      };
    case 'GET_MAIN_PAGE_SUCCESS':
      return {
        ...state,
        data: action.result.data,
        loaded: true
      };
    case 'GET_MAIN_PAGE_FAILURE':
      return {
        ...state,
        loaded: true
      };
    case 'SET_CURRENT_ROUTE':
      return {
        ...state,
        currentRoute: action.route
      };

    default:
      return state;
  }
}



