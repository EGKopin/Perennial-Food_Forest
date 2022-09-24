/**
 * ************************************
 *
 * @module  Details
 * @author
 * @date
 * @description presentation component that renders all of the additional details and notes
 *
 * ************************************
 */

 import React, { useState } from 'react';
import AddDetail from './AddDetail.jsx';
 import Details from './Details.jsx';

class DetailsContainer extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      currentDetails: [],
      // addDetailOpen: false,
    };
    this.getDetails = this.getDetails.bind(this);
    // this.addNote = this.addNote.bind(this);
    }
  
    componentDidMount(){
      this.getDetails();
    }

  getDetails(){
    fetch(`http://localhost:3000/perennial/${this.props.id}`)
    .then(res => res.json())
    .then(details => {
      details.sort((a,b) => a._id - b._id);
      this.setState({currentDetails: details})
      })
    .catch ((err) => console.log('error in getDetails', err))
  }
  
  addNote(){
    // this.setState({addDetailOpen:true});
    console.log('To add note inputs')
  }

  render () {

    /* General Note Rendering Logic*/
    const notes = [];    
    if (!this.state.currentDetails.length) {
      notes.push('There are no notes on this plant. Slacker.')
    }
    for (let i = 0; i < this.state.currentDetails.length; i++){
      const { date, note } = this.state.currentDetails[i];
      notes.push(
        <Details
          date={date}
          note={note}
          key={`note ${date}`}
        />
      )
    }
    return (
      <div className="updateModal">
        <p>{this.props.name} - {this.props.type}</p>
        <div className='detailDate'>Date</div><div className='detailNote'>Note</div>
        {notes}
         <p>
          <button onClick={this.addNote}>Add Note</button>
          {/* <div>
          {this.state.addDetailOpen && <AddDetail />

          }
          </div> */}
          <button className='plantButton'  onClick={() => this.props.closeDetailModal(false)} >Close</button>
        </p>
      </div>
    )
  }
}

 export default DetailsContainer;