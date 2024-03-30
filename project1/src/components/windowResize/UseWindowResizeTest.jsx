import useWindowResize from "./useWindowResize"

const UseWindowResizeTest = () => {
    const { width, height } = useWindowResize();
    return (
        <div className="container mt-3">
            <h3>Use Window Resize Hook</h3>
            <p>Width : {width}</p>
            <p>Height : {height}</p>
        </div>
    )
}

export default UseWindowResizeTest
