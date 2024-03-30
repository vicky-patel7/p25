
const ScrollToTop = () => {
    function handleScrollToTop() {
        window.scrollTo({
            top : 0,
            left : 0,
            behavior : "smooth"
        })
    }

  return (
    <div className="container d-flex justify-content-end mt-3">
        <button className="btn btn-primary" onClick={handleScrollToTop}>ScrollToTop</button>
    </div>
  )
}

export default ScrollToTop
