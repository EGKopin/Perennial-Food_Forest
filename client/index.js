import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <div>Hello World
    <button>words here</button>
  </div>;
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);