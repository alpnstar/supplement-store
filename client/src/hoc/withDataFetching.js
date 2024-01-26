import React from 'react';

const WithDataFetching = (url, wrappedComponent) => {
    return () => {

        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const result = await response.json();
                    setData(result);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, [url]);
    }
}

export default WithDataFetching;