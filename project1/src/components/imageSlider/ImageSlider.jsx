import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ImageSlider.css'


const ImageSlider = ({ url }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMessage] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    function handlePrevNext(direction) {
        if (direction === 'prev') {
            setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
        } else {
            setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
        }
    }


    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=1&limit=5`);
            const d = await response.json();
            if (d) {
                setData(d);
                setErrorMessage("");
            }
            setLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url);
        }
    }, [url])
    
    if (loading) {
        return (
            <div className='container text-center m-auto'>
                <h3>Loading...! Please Wait</h3>
            </div>
        )
    }
    if (errorMsg !== "") {
        return (
            <div className='container text-center m-auto'>
                <h3>Error : {errorMsg}</h3>
            </div>
        )
    }

    return (
        <div className="container mt-3 d-flex flex-column justify-content-center align-items-center">
            <div className='image-main d-flex'>
                <i className='fa fa-angle-double-left previous' onClick={() => handlePrevNext('prev')}></i>
                {data && data.length > 0 && <img src={data[currentSlide].download_url} className='img-fluid' />}
                <i className='fa fa-angle-double-right next' onClick={() => handlePrevNext('next')}></i>
            </div>
            <div>
                {data && data.length > 0 ? data.map((_, index) => {
                    return <span key={index} className = {(index === currentSlide ? 'slider-active' : 'slider-inactive')}><i className='fa fa-circle mx-1 icon-slider' onClick={() => setCurrentSlide(index)}></i></span>
                }) : null}
            </div>
        </div>
    )
}

ImageSlider.propTypes = {
    url: PropTypes.string
}

export default ImageSlider;
