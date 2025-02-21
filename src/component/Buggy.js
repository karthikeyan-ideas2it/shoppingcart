import React, { useEffect } from 'react';

const Buggy = () => {
  // Throw error directly in the body of the component
  useEffect(() => {
    // Simulating a JS error in the component lifecycle
    throw new Error('I am a buggy component!');
  }, []); // Effect is empty, just used to simulate the error

  return (<div>This will not be rendered due to the error.</div>);
};

export default Buggy;

