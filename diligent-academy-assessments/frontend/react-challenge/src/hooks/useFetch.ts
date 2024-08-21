import { useState, useEffect } from "react";

function useFetch<T>(fetchFunction: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      
      let lock = true;
      const fetchData = async () => {
      try {
        const result = await fetchFunction();
        if (lock) {
          setData(result);
        }
      } catch (err) {
        if (lock) {
          setError("Failed to fetch heroes.");
        }
      } finally {
        if (lock) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      lock = false;
    };
  }, [fetchFunction]);

  return { data, loading, error };
}

export default useFetch;