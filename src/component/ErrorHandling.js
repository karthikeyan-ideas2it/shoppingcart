import React, { useState, useEffect } from 'react';

const ErrorHandling = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  const handleError = (error, info) => {
    setHasError(true);
    setError(error);
    setInfo(info);
  };

  useEffect(() => {
    const handleGlobalError = (event) => {
      event.preventDefault();
      handleError(event.error);
      return true;
    };

    window.addEventListener('error', handleGlobalError);

    return () => {
      window.removeEventListener('error', handleGlobalError);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong!</h1>;
  }

  return children;
};

export default ErrorHandling;