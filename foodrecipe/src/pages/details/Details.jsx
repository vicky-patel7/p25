import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/globalContext";

const Details = () => {
  const params = useParams();
  const id = params.id;
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("");
  const {addToFavourites} = useContext(GlobalContext)

  async function fetchRecipeDetails(getId) {
    try {
      setLoading(true);
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${getId}`);
      const data = await response.json();
      if (data) {
        console.log(data.data.recipe);
        setDetails(data.data.recipe);
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (id) {
      fetchRecipeDetails(id);
    }
  }, [id]);


  if (loading) {
    return <div className="container"><h3>Loading... Please Wait!</h3></div>
  }
  if (err) {
    return <div className="container"><h3>Something Went Wrong! Try Again</h3></div>
  }

  return (
    <div className="container">
      {
        details && (
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <img src={details?.image_url} alt={details?.title} className="img-fluid w-100" />
              </div>
              <button className="btn btn-success m-2" onClick={() => addToFavourites(details)}>Add To Favoirites</button>
              <div className="col-md-6">
                <h2>{details?.title}</h2>
                <p><strong>Publisher:</strong> {details?.publisher}</p>
                <p><strong>Servings:</strong> {details?.servings}</p>
                <p><strong>Cooking Time:</strong> {details?.cooking_time} minutes</p>
                <h3>Ingredients:</h3>
                {details?.ingredients?.map((ingredient, index) => (
                    <p key={index}>{ingredient?.quantity} {ingredient?.unit} {ingredient?.description}</p>
                  ))
                }
                <h3>Instructions:</h3>
                <p>Check out the full details? <a href={details?.source_url} target="_blank" rel="noopener noreferrer">here</a>.</p>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Details
