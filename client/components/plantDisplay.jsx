/**
 * ************************************
 *
 * @module  plantDisplay
 * @author
 * @date
 * @description presentation component that renders a single box for each plant
 *
 * ************************************
 */

 import React from 'react';
 import Plant from './Plant.jsx';

 const PlantDisplay = props => {

    return (
     <div className="plantDisplay">
      <p>
        here's johnny
        <Plant 
        getPlant={props.getPlant}/>
      </p>
     </div>
   );
 }

 export default PlantDisplay;