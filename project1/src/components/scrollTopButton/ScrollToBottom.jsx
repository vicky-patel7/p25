
const ScrollToBottom = () => {
    function handleScrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className="container d-flex justify-content-end mt-2">
            <button className="btn btn-primary" onClick={handleScrollToBottom}>ScrollToBottom</button>
        </div>
    )
}

export default ScrollToBottom
