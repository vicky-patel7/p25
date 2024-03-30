import { useRef, useState } from "react"
import useOnClickHook from "./useOnClickHook";

const UseOnClickOutsideHookTest = () => {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  useOnClickHook(ref, () => setShowContent(false));
  return (
    <div className="container mt-3">
      {showContent ? <div ref={ref}>
        <h3>This is a random content</h3>
        <p>If you click outside of the this content, the content will hide. It won&apos;t hide if you click inside of this content.</p>
      </div> : <button onClick={() => setShowContent(true)}>Show Content</button>}
    </div>
  )
}

export default UseOnClickOutsideHookTest
