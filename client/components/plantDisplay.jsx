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

 import React, { useState } from 'react';
 import AddPlant from './AddPlant.jsx';
 import Plant from './Plant.jsx';

 const PlantDisplay = props => {
  const { plantList } = props;
  const [openModal, setOpenModal] = useState(false); //modal is initally closed

  const plants = [];
  for (let i = 0; i < props.plantList.length; i++){
    const { _id, name, type, planted_date, zones, watering, size, self_pollinating, scientific_name, light_exposure, hardiness_tempf, fruiting_branch } = plantList[i];
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
        hardiness_tempf = {hardiness_tempf}
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
         <h1>Perennial Food Forest</h1> 
        <button className='plantButton' onClick={() => {setOpenModal(true);
          }}>Add Plant</button>
            {openModal && <AddPlant 
            getPlant={props.getPlant}
            closeModal={setOpenModal}
            />
            }
        </div>
        <div className='plantDisplay'>
        {plants}   
        </div>
     </div>
   );
 }

 export default PlantDisplay;