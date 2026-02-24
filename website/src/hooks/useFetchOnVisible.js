import { useEffect, useState } from "react";

const useFetchOnVisible = (ref, fetchFn) => {
    const [data, setData] = useState(null); // the state to store the fetched data
    const [loading, setLoading] = useState(false); // the state to indicate the loading status

    useEffect(() => {
        // create a new intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                // get the first entry
                const entry = entries[0];

                // if the entry is visible and not loading
                if (entry.isIntersecting && !loading && !data) {
                    // set the loading state to true
                    setLoading(true);

                    // call the fetch function and set the data state
                    fetchFn().then((data) => {
                        setData(data);
                        setLoading(false);
                    });
                }
            },
            { threshold: 0.1 } // the ratio of the element's area that is visible
        );

        // observe the ref element
        observer.observe(ref.current);

        // unobserve the ref element when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, [ref, data, fetchFn, loading]); // the dependencies of the effect

    // return the data and loading state
    return [data, loading];
};

export default useFetchOnVisible;
