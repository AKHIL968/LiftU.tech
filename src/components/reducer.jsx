const reducer = (state, action) => {
  switch (action.type) {

    case "SET_STORIES" :
      return {
        ...state,
        isLoading:  true,
      };

    case "GET_STORIES" :
        return {
            ...state,
            isLoading: false,
            hits: action.payload.hits,
            // nbPages: action.payload.nbPages,
        }

      case "REMOVE_POST": 
      return{
        ...state,
        hits: state.hits.filter((curElem) => {
          return curElem.objectID !== action.payload
        })
      }

      case "SEARCH_QUERY" : 
      return {
        ...state,
        query: action.payload
      }
  }
  return state;
};

export default reducer;
