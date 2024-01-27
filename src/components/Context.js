import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const API = "https://hn.algolia.com/api/v1/search?"
const initialState = {
    isLoading: true,
    query: "REACT",
    nbPages: 0,
    page: 0,
    hits: [],
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer,initialState);


    const fetchApiData = async (url) => {

        dispatch({type: "SET_STORIES"})
        try{
            let res = await fetch (url);
            let data = await res.json();
            console.log(data)
            dispatch({type: "GET_STORIES",
            payload: {
                hits: data.hits,
                nbPages: data.nbPages
            }
        })
        }
        catch(error) {
            console.log('Error')
        }
    }
    const removePost = (postID) => {
        dispatch({ type: "REMOVE_POST", payload: postID })
    }

    const searchPost = (searchQuery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery
        })
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query])

    return (

        <AppContext.Provider value={{...state, removePost, searchPost}}>
        {children}
        </AppContext.Provider>
        )
}

const useGlobalContext = () => {
    return (
        useContext(AppContext)
    )
}

export {AppContext, AppProvider, useGlobalContext}