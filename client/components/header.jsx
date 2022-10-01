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
 import AddPlant from './AddPlant.jsx';

 const Header = props => {

 return (
  <div className="header">
   <h1>Test</h1>
   Register/Login buttons
   if user loged in, add plant button
   <AddPlant />
  </div>
  );
 }

 export default Header;