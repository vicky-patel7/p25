import { useEffect, useState } from "react";


const useFetchHook = (url, options = {}) => {
    //3 States
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            setPending(true);
            const response = await fetch(url, { ...options });
            if (!response.ok) throw new Error(response.statusText);
            const result = await response.json();
            setData(result);
            setError(null);
            setPending(false);
        } catch (err) {
            setError(err.message);
            setPending(false);
        }
    }

    useEffect(() => {
        fetchData();
        //eslint-disable-next-line
    }, [url])

    return { data, error, pending };
}
export default useFetchHook
