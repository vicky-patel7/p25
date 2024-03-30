import { useEffect, useState } from "react"

const SearchAutoComplete = () => {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [searchParams, setSearchParams] = useState("");
    const [showDropDown, setDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    async function fetchUsersData() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            setUsers(data.users);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    }
    useEffect(() => {
        fetchUsersData();
    }, []);

    function handleOnChange(event) {
        const q = event.target.value.toLowerCase();
        setSearchParams(q);
        if(q.length > 2) {
            const filterData = users && users.length > 0 ? 
            users.filter(item => item?.firstName?.toLowerCase().indexOf(q) !== -1 || item?.maidenName?.toLowerCase().indexOf(q) !== -1 || item?.lastName?.toLowerCase().indexOf(q) !== -1)
            : [];
            setDropDown(true);
            setFilteredUsers(filterData);
        }else {
            setDropDown(false);
        }
    }

    if (loading) {
        return <div className="container">
            <h3>Loading... Please Wait!</h3>
        </div>
    }
    if (error !== "") {
        return <div className="container">
            <h3>Error : {error}</h3>
        </div>
    }

    return (
        <div className="container mt-3">
            <input id="input-text" name="query-text" className="form-control" type="text" placeholder="Enter Name" value={searchParams} onChange={handleOnChange}/>
            {
                showDropDown && filteredUsers && filteredUsers.length > 0 
                ? filteredUsers.map((user) => <p key={user.id}>{user?.firstName} {user?.maidenName} {user?.lastName}</p>)
                : null
            }
        </div>
    )
}

export default SearchAutoComplete
