/**
 * ************************************
 *
 * @module  Details
 * @author
 * @date
 * @description presentation component that renders all details for the plant
 *
 * ************************************
 */

 import React from 'react';

 const Details = props => {
  const { date, note } = props;

    return (
     <div className="detailItem">
      <div className='detailDate'>{date}</div><div className='detailNote'>{note}</div>
     </div>
   );

 }

 export default Details;