import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Plant from './components/Plant.jsx';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'

//this works...but is this actually good?
// function App() {
//   return <div>Hello World
//     <button>words here</button>
//     <Plant />
//   </div>;
// }

const root = createRoot(document.getElementById('app'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);