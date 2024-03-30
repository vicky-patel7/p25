import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useParams } from "react-router-dom";
import { GlobalContext } from '../../context/globalContext';

const FavDetails = () => {
    const params = useParams();
    const paramsId = params.id;
    const {favourites, removeFromFavourites} = useContext(GlobalContext);
    function getObjectById(array, id) {
        return array.find(obj => obj.id === id);
    }
    const details = getObjectById(favourites, paramsId);
  return (
    <div className="container">
      {
        details && (
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <img src={details?.image_url} alt={details?.title} className="img-fluid w-100" />
              </div>
              <button className="btn btn-success m-2" onClick={() => removeFromFavourites(paramsId)}>Remove From Favoirites</button>
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

FavDetails.propTypes = {
    details : PropTypes.object,
}

export default FavDetails
