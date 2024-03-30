import { useState, useEffect } from 'react'

const LoadMoreData = () => {

    const [loading, setLoading] = useState(false);
    const [productsData, setProductsData] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [count, setCount] = useState(0);
    const url = 'https://dummyjson.com/products';

    async function fetchProducts() {
        try {
            setLoading(true);
            const queryUrl = `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`;
            const response = await fetch(queryUrl);
            const d = await response.json();
            console.log(d);
            if (d && d.products && d.products.length) {
                setProductsData(d.products);
                setErrorMessage("");
            }
            setLoading(false);
        } catch (err) {
            setErrorMessage(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url) {
            fetchProducts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, count]);

    if (loading) {
        return <div className='container'><h3>Loading... Please Wait!</h3></div>
    }
    if (errorMessage !== "") {
        return <div className='container'><h3>Error : {errorMessage}</h3></div>
    }
    return (
        <div className='container mt-3 justify-content-center align-items-center text-center'>
            <div className='products d-flex flex-wrap row justify-content-center'>
                {
                    productsData && productsData.length > 0 ? productsData.map((product) => {
                        return (
                            <div key={product.id} className='card m-1 col-md-4'>
                                <div className='card-header d-flex justify-content-between'>
                                    <p>{product.brand}</p>
                                    <p>{product.category}</p>
                                </div>
                                <div className='card-body'>
                                    <h4>{product.title}</h4>
                                    <p>{product.description}</p>
                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-primary small mx-2'>To Cart</button>
                                    <button className='btn btn-primary small'>Buy</button>
                                </div>
                            </div>
                        )
                    }) : <h3>No Product Available</h3>
                }
            </div>
            {
                count < 5 ? <button className='btn btn-primary mt-2' onClick={() => setCount(count => count + 1)}>Load More</button> : <button className='btn btn-primary disabled mt-2'>Load More</button>
            }
            {count === 5 && <span>100 Data Loaded</span>}
        </div>
    )
}

export default LoadMoreData
