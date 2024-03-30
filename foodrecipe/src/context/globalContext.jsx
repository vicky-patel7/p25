import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [searchParams, setSearchParams] = useState('');
    const [recipeData, setRecipeData] = useState([]);
    const [favourites, setFavourites] = useState([]);
    
    useEffect(() => {
        const storedRecipeData = sessionStorage.getItem('recipeData');
        if (storedRecipeData) {
            setRecipeData(JSON.parse(storedRecipeData));
        }
    }, []);
    
    useEffect(() => {
        const favSelected = sessionStorage.getItem('favRecipes');
        if(favSelected) {
            setFavourites(JSON.parse(favSelected));
        }
    }, []);

    function addToFavourites(details) {
        const newFavourites = [...favourites, details];
        console.log(newFavourites);
        sessionStorage.removeItem('favRecipes');
        sessionStorage.setItem('favRecipes', JSON.stringify(newFavourites));
    }

    function removeFromFavourites(id) {
        const newFavourites = favourites.filter(favourite => favourite.id !== id)
        sessionStorage.removeItem('favRecipes');
        sessionStorage.setItem('favRecipes', JSON.stringify(newFavourites));
    }

    async function handleRecipeSearch(e) {
        e.preventDefault();
        try{
            const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`;
            const response = await fetch(url);
            const queryResponse = await response.json();
            if(queryResponse?.data?.recipes) {
                sessionStorage.removeItem('recipeData');
                sessionStorage.setItem('recipeData', JSON.stringify(queryResponse.data.recipes));
                setRecipeData(queryResponse.data.recipes);
            }
        }catch(err) {
            console.log(err.message);
        }
    }
    return <GlobalContext.Provider value = {{searchParams, setSearchParams, handleRecipeSearch, recipeData, addToFavourites, favourites, removeFromFavourites}}>{children}</GlobalContext.Provider>
}

GlobalState.propTypes = {
    children: PropTypes.node.isRequired
};
