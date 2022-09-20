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
  const { plantList } = props;
  const plants = [];
  for (let i = 0; i < props.plantList.length; i++){
    const { name, type, planted_date, zones, watering, size, self_pollinating, scientific_name, light_exposure, hardiness_tempF, fruiting_branch } = plantList[i];
    plants.push(
      <Plant
        type = {type}
        name = {name} 
        planted_date = {planted_date}
        zones = {zones}
        watering = {watering}
        size = {size}
        self_pollinating = {self_pollinating}
        scientific_name = {scientific_name}
        light_exposure = {light_exposure}
        hardiness_tempF = {hardiness_tempF}
        fruiting_branch = {fruiting_branch}
        key = {`Plant #${i}`}
        // getPlant={props.getPlant}
        />
    );
  }

    return (
     <div className="plantDisplay">
      <button onClick={props.getPlant}>fetch plant</button>
       {plants}
     </div>
   );
 }

 export default PlantDisplay;