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
 import AddPlant from './AddPlant.jsx';
 import Plant from './Plant.jsx';
 import EditPlant from './EditPlant.jsx';

 const PlantDisplay = props => {
  const { plantList } = props;
  const plants = [];
  for (let i = 0; i < props.plantList.length; i++){
    const { _id, name, type, planted_date, zones, watering, size, self_pollinating, scientific_name, light_exposure, hardiness_tempF, fruiting_branch } = plantList[i];
    plants.push(
      <Plant
        id = {_id}
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
        editPlant={props.editPlant}
        deletePlant={props.deletePlant}
        />
    );
  }

    return (
     <div className="mainContainer">
        <div className='header'>
        {/* <button onClick={props.getPlant}>Fetch Those Plants!</button> */}
        {/* <button onClick={props.addPlant}>Add Plant</button> */}
        <AddPlant 
        getPlant={props.getPlant}
        />
        </div>
        <div className='plantDisplay'>
        {plants}   
        </div>
     </div>
   );
 }

 export default PlantDisplay;