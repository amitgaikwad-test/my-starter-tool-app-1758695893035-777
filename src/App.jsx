import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('App mounted or count changed:', count);
  }, [count]);

  return (
    <div className="app">
      <h1>React Vite Starter</h1>
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </div>
  );
}

export default App;
