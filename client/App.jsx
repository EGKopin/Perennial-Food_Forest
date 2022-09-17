/**
 * ************************************
 *
 * @module  App.jsx
 * @author  Etana Kopin
 * @date
 * @description This is the main container for my React application
 *
 * ************************************
 */

import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import PlantDisplay from './components/plantDisplay.jsx';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: [],
      type: {}
    };
    this.getPlant = this.getPlant.bind(this);
}
// componentDidMount() {
//   getPlant()
// }

getPlant(){
  console.log('click');
  fetch('http://localhost:3000/perennial')
    .then(res => res.json())
    .then(json => {
        console.log(json)
      })
    .catch ((err) => console.log('error in getPlant', err))
}

render() {
  return(
    <div className="router">
      <main>
        <Routes>
          <Route exact path='/' element={<PlantDisplay 
          getPlant={this.getPlant}
          />}/>
        </Routes>
      </main>
    </div>
  );
}
}

export default App;