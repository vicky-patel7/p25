import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';

const RecipeCard = ({singleRecipeItem, type}) => {
    const {removeFromFavourites} = useContext(GlobalContext);
    return (
        <div className="card m-1 w-100">
            <img className="card-img-top" src={singleRecipeItem.image_url} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{singleRecipeItem.publisher}</h5>
                    <p className="card-text">{singleRecipeItem.title}</p>
                    <a href={`/${type}/${singleRecipeItem.id}`} className="btn btn-primary">View Recipe</a>
                    {type === "fav" && <a href="/favourites" className="btn btn-primary my-2" onClick={() => removeFromFavourites(singleRecipeItem.id)}>Remove From Favourites</a>}
                </div>
        </div>
    )
}
RecipeCard.propTypes = {
    singleRecipeItem : PropTypes.object,
    type : PropTypes.string
}

export default RecipeCard
