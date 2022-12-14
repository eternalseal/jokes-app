import { useState } from 'react';

import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl text-gray-800 m-auto max-w-xs">Hello World</h1>
    </div>
  );
}

export default App;
