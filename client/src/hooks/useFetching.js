import {useState} from "react";

export default function (func) {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetching = async (...args) => {
        try {
            setIsLoading(true);
            await func(...args);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, error];
}
