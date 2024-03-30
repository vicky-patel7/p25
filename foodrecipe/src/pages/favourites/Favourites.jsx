import { useContext } from "react"
import { GlobalContext } from "../../context/globalContext"
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Favourites = () => {
  const { favourites } = useContext(GlobalContext);
  return (
    <div className="container d-flex flex-wrap">
      {
        favourites && favourites.length > 0
          ? favourites.map((reci) => <RecipeCard key={reci.id} singleRecipeItem = {reci} type = "fav"/>)
          : <h3>No Favourite Recipes Added!</h3>
      }
    </div>
  )
}

export default Favourites
