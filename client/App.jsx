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
import AddPlant from './components/AddPlant.jsx';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: [],
      plants: [],
      currentID: null
    };
    this.getPlant = this.getPlant.bind(this);
    this.deletePlant = this.deletePlant.bind(this);
}

componentDidMount(){
  this.getPlant()
}

componentDidUpdate() {
  this.getPlant()
}

getPlant(){
  // console.log('click');
  fetch('http://localhost:3000/perennial')
    .then(res => res.json())
    .then(plants => {
      plants.sort((a,b) => a._id - b._id)
      this.setState({plants: plants})
      })
    .catch ((err) => console.log('error in getPlant', err))
}

editPlant(e){
 console.log(e.target.id)
  fetch( `http://localhost:3000/perennial/${e.target.id}`, {
    method:'PATCH',
    // mode: 'cors',
    body: JSON.stringify({
      name: 'fooca',
      type: 'basdfdsr',
      zones: '1-4'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',

    },
  })
  .then(res => res.json())
  .then(editedplant => {
    console.log(editedplant)
    // this.getPlant();
    })
  .catch ((err) => console.log('error in editPlant', err))
}

//deletes a specific id number from the req.params/:id, so need to grab that id to pass into the fetch requrest
deletePlant(event){
  console.log('delete plant', event.target.id)
  const toDelete = event.target.id
  fetch(`http://localhost:3000/perennial/${toDelete}`, {
    method:'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(res => res.json())
  .then(deletedplant => {
    console.log(deletedplant);
      // this.getPlant()
    })
  .catch ((err) => console.log('error in editPlant', err))
}


render() {
  return(
    <div className="router">
      <main>
        <Routes>
          <Route exact path='/' element={
            <PlantDisplay 
            getPlant={this.getPlant}
            editPlant={this.editPlant}
            deletePlant={this.deletePlant}
            plantList={this.state.plants}
            addPlant={this.addPlant}
            />
        }
          />
          <Route path='add' element={<AddPlant 
            addPlant={this.addPlant}
            />
          }/>
        </Routes>
      </main>
    </div>
  );
}
}

export default App;