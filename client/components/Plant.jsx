/**
 * ************************************
 *
 * @module  Plant
 * @author
 * @date
 * @description presentation component that renders a single box for each plant
 *
 * ************************************
 */

 import React, {useState} from 'react';
 import Modal from './EditPlant.jsx'

 const Plant = props => {
  const { id , name, type, planted_date, zones, watering, size, self_pollinating, scientific_name, light_exposure, hardiness_tempF, fruiting_branch } = props;

  const [openModal, setOpenModal] = useState(false); //modal is initally closed
  

    return (
     <div className="plant">
      <p>
        <label>Plant Name: {name} </label>        
      </p>
      <ul className='plantDetails'>
        <li>Scientific Name: <i>{scientific_name}</i></li>
        <li>Type: {type}</li>
        <li>Zones: {zones}</li>
        <li>Watering: {watering}</li>
        <li>Fruiting Branches: {fruiting_branch}</li>
        <li>Planted Date: {planted_date}</li>
        <li>Size: {size}</li>
        <li>Self-Pollinating: {self_pollinating}</li>
        <li>Light Exposure: {light_exposure}</li>
        <li>Hardiness Temperature: {hardiness_tempF}</li>
      </ul>
      <p>
      <button className='plantButton' onClick={() => {
        setOpenModal(true);
      }}  id={id}>Edit in modal</button>
      <button className='plantButton' onClick={props.deletePlant} id={id}>Delete</button>
      </p>
       {openModal && <Modal 
       closeModal={setOpenModal}
       />}
       {/* if openModal is true, it will auto load the modal?, uses Javascript hence curlybrackets*/}
     </div>
   );
 }

 export default Plant;