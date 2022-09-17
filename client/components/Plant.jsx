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

 import React from 'react';

 const Plant = props => {

    return (
     <div className="plant">
      <p>
        <label>Plant Name:</label>
        <button onClick={props.getPlant}>fetch plant</button>
      </p>
     </div>
   );
 }

 export default Plant;