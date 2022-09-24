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
import DetailsContainer from './DetailsContainer.jsx';

 const Plant = props => {
  const { id , name, type, planted_date, zones, watering, size, self_pollinating, scientific_name, light_exposure, hardiness_tempf, fruiting_branch, detailList } = props;

  const [openModal, setOpenModal] = useState(false); //modal is initally closed
  const [openDetailModal, setOpenDetailModal] = useState(false); //modal is initally closed
  

    return (
     <div className="plant">
      <p>
        <label className='plantName'>{name}</label>        
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
      <button className='editButton' onClick={() => {
        setOpenModal(true);
        }}  id={id}>Edit</button>

      <button className = 'detailsButton' onClick={() => {
        setOpenDetailModal(true);
        }} id={id}>Details</button>

      <button className='deleteButton' onClick={props.deletePlant} id={id}>Delete</button>

      </p>
      {/* Details modal information */}
      {openDetailModal && <DetailsContainer
      // detailList={detailList}
      // getDetails={props.getDetails}
      name={name}
      type={type}
      id={id}
      closeDetailModal={setOpenDetailModal}
      />}

      {/* Edit Plant modal information */}
       {openModal && <EditPlant
       plantDetails={props} 
       closeModal={setOpenModal}
       />}
     </div>
   );
 }

 export default Plant;