import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Unable to fetch');
                    }
                    return res.json();
                })
                .then((data) => {
                    setIsLoading(false);
                    setError(null);
                    setData(data);
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setIsLoading(false);
                        setError(err.message); 
                    }
                })
        }, 250)

        return () => abortCont.abort();
    }, [url]);

    return { data, isLoading, error };
}
    
export default useFetch;