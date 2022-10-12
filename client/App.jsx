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

import React, { useState, Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import PlantDisplay from './components/plantDisplay.jsx';
import AddPlant from './components/AddPlant.jsx';
import { getPlant, deletePlant, editPlant } from './fetch/perennialService.js';

import './styles.css';

// const App = () => {
  // let initialState = {
  //   _id: [],
  //   plants: [],
  //   currentID: null,
  //   currentDetails: null,
  // }
  // const [state, setState] = useState(initialState);

//     return(
//       <>
//       <div className="router">
//         test
//         <main>
//           {/* <Routes>
//             <Route exact path='/' element={ */}
//               <PlantDisplay />
//           {/* } */}
//             {/* />
//             <Route path='add' element={<AddPlant 
//               // addPlant={this.addPlant}
//               />
//             }/>
//           </Routes> */}
//         </main>
//       </div>
//       </>
//     );
  
// }


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: [],
      plants: [],
      currentID: null,
      currentDetails: null,
    };
    this.getPlant = this.getPlant.bind(this);
    this.deletePlant = this.deletePlant.bind(this);
    this.getDetails = this.getDetails.bind(this);
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

getDetails(e){
    fetch(`http://localhost:3000/perennial/${e.target.id}`)
    .then(res => res.json())
    .then(details => {
      details.sort((a,b) => a._id - b._id);
      console.log(details);
      this.setState({currentDetails: details})
      })
    .catch ((err) => console.log('error in getDetails', err))
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
  const confirm = window.confirm('Do you really want to delete all your hard work?')
  if (confirm){
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
            getDetails={this.getDetails}
            detailList={this.state.currentDetails}
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