import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  
  const [items, setitems] = useState([]); // Store items list
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    FetchItemData();
  }, [url]); 

  const FetchItemData = async () => {
    try {
      console.log(url);
      setLoading(true);
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setitems(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { items, loading, error };
};

export default useFetchData;