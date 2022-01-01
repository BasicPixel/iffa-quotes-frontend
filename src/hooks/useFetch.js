import React from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [options, url]);

  const refetch = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return { response, loading, error, refetch };
};

export default useFetch;
