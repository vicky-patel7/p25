import useFetchHook from "./useFetchHook";

const UseFetchHookTest = () => {
    const { data, error, pending } = useFetchHook("https://dummyjson.com/products", {});
    console.log(data);
    if (error) {
        return <div className="container"><h3>Something Went Wrong!</h3></div>
    }
    if (pending) {
        return <div className="container"><h3>Loading! Please Wait!</h3> </div>
    }
    return (
        <div className="container">
            {
                data && data.products.length > 0 && data.products.map((item) =>
                    <p key={item.id}>{item.title}</p>
                )
            }
        </div>
    )
}

export default UseFetchHookTest;
