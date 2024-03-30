import PropTypes from 'prop-types';


const Search = ({search, setSearch, handleSearch}) => {
    return (
        <div className='d-flex'>
            <input
                type="text"
                className="city-search form-control mx-1"
                placeholder="Enter city name"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className='btn btn-secondary' onClick={handleSearch}>Search Weather</button>
        </div>
    )
}

Search.propTypes = {
    search : PropTypes.string,
    setSearch : PropTypes.func,
    handleSearch : PropTypes.func
}

export default Search
