import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import './ScrollBar.css';

const ScrollBar = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const d = await response.json();
            setData(d.products);
            setLoading(false);
            setErrorMessage('');
        } catch (err) {
            setLoading(false);
            setErrorMessage(err.message);
        }
    }
    useEffect(() => {
        if (url !== '') {
            fetchData(url);
        }
    }, [url]);

    function handleScrollBarPercentage() {
        const howMuchScrolled = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((howMuchScrolled / height) * 100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollBarPercentage);
        return () => {
            window.removeEventListener('scroll', () => { });
        }
    }, []);


    if (loading) {
        return <div className="container">
            <h3>Please wait while we load the data.</h3>
        </div>
    }
    if (error != '') {
        return <div className="container">
            <h3>Something Went Wrong!</h3>
        </div>
    }
    return (
        <div className="container mt-3 d-flex flex-column">
            <h3>Custom ScrollBar Indicator</h3>
            <div className="top-container" style={{
                width: `${scrollPercentage}%`
            }}>
                <div className="current-progress-bar" style={{
                    width: `${scrollPercentage}`,
                    height: '5px',
                    color: 'black'
                }}>

                </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0
                        ? data.map((item) => <p key={item.id}>{item.title}</p>)
                        : null
                }
            </div>
        </div>
    )
}


ScrollBar.propTypes = {
    url: PropTypes.string
}


export default ScrollBar
