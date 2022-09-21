/**
 * ************************************
 *
 * @module  header
 * @author
 * @date
 * @description presentation component that will hold interactivity buttons
 *
 * ************************************
 */

 import React from 'react';

 const Header = props => {

 return (
  <div className="header">
   <button onClick={props.getPlant}>fetch plants</button>
  </div>
  );
 }

 export default Header;