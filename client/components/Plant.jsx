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
import EditPlant from './EditPlant.jsx';
//  import Modal from './EditPlant.jsx'

 const Plant = props => {
  const { id , name, type, planted_date, zones, watering, size, self_pollinating, scientific_name, light_exposure, hardiness_tempf, fruiting_branch } = props;

  const [openModal, setOpenModal] = useState(false); //modal is initally closed
  

    return (
     <div className="plant">
      <p>
        <label className='plantName'>Plant Name: {name} </label>        
      </p>
      <ul className='plantDetails'>
        <li><label>Scientific Name:</label><i>{scientific_name}</i></li>
        <li><label>Type:</label> {type}</li>
        <li><label>Zones:</label> {zones}</li>
        <li><label>Watering:</label> {watering}</li>
        <li><label>Fruiting Branches:</label> {fruiting_branch}</li>
        <li><label>Planted Date:</label> {planted_date}</li>
        <li><label>Size:</label> {size}</li>
        <li><label>Self-Pollinating:</label> {self_pollinating}</li>
        <li><label>Light Exposure:</label> {light_exposure}</li>
        <li><label>Hardiness Temperature:</label> {hardiness_tempf}</li>
      </ul>
      <p>
      <button className='plantButton' onClick={() => {
        setOpenModal(true);
      }}  id={id}>Edit in modal</button>
      <button className='plantButton' onClick={props.deletePlant} id={id}>Delete</button>
      </p>
       {openModal && <EditPlant
       plantDetails={props} 
       closeModal={setOpenModal}
       />}
       {/* if openModal is true, it will auto load the modal?, uses Javascript hence curlybrackets*/}
     </div>
   );
 }

 export default Plant;