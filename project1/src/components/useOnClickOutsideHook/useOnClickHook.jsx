import { useEffect } from "react"

const useOnClickHook = (ref, handler) => {

    useEffect(() => {
        function listener(event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        }
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        }
    }, [ref, handler]);
}

export default useOnClickHook
