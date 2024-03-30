import { useContext } from "react"
import { GlobalContext } from "../../context/globalContext"
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Recipes = () => {
  const { searchParams, setSearchParams, handleRecipeSearch, recipeData } = useContext(GlobalContext);
  return (
    <div className="container d-flex flex-wrap">
      <div className="w-100 navbar-nav mr-auto mt-3">
          <input type="text" className="form-control" placeholder="Recipe Name" aria-label="recipe-name" name="recipe-name" value={searchParams} onChange={(e) => setSearchParams(e.target.value)}/>
          <button className="btn btn-secondary mt-2" id="recipe-name" onClick={(e) => handleRecipeSearch(e)}>Search</button>
      </div>
      {
        recipeData && recipeData.length > 0
          ? recipeData.map((reci) => <RecipeCard key={reci.id} singleRecipeItem = {reci} type = "details"/>)
          : null
      }
    </div>
  )
}

export default Recipes
