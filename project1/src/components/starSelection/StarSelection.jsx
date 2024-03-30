import { useState } from 'react';
import './StarSelection.css';
import PropTypes from 'prop-types';

const StarSelection = ({ starsCount = 5 }) => {
    const [ratings, setRatings] = useState(0);
    const [hover, setHover] = useState(0);

    function handleMouseEnter(currentIndex) {
        setHover(currentIndex);
    }
    function handleMouseLeave() {
        setHover(ratings);
    }

    return (
        <div className="container text-center mt-3">
            <h3>Star Rating</h3>
            <h5>Current Rating : <strong>{ratings}</strong></h5>
            {
                [...Array(starsCount)].map((_, index) => {
                    return (
                        <span className={(index < ratings || index < hover) ? 'active' : 'inactive'} key={index + 1}
                            onClick={() => setRatings(index + 1)}
                            onMouseMove={() => handleMouseEnter(index + 1)}
                            onMouseLeave={() => handleMouseLeave()}
                        ><i className="fa fa-star star-icon"></i></span>
                    )
                })
            }
        </div>
    )
}

StarSelection.propTypes = {
    starsCount: PropTypes.number
}

export default StarSelection
