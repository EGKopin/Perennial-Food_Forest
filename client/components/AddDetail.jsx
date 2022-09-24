import React from "react";

class AddDetail extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      date: '',
      note: '',
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleNote = this.handleNote.bind(this);
  
    this.addDetail = this.addDetail.bind(this);
  }
  
  handleDate(event) {
    this.setState({type:event.target.value});
  }
  handleNote(event) {
    this.setState({note:event.target.value});
  }
  

  //add a new plant and reset state values to empty strings
  addDetail(e){
    console.log('add plant')
    fetch(`http://localhost:3000/perennial/notes/${id}`, {
      method:'POST',
      mode: 'cors',
      body: JSON.stringify({
        date: `${this.state.date}`,
        note: `${this.state.note}`,
       }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(res => res.json())
    .then(addedDetail => {
        let note = addedDetail;
    })
      .then(this.setState({
        date: '',
        note: '',
      }),
      // this.props.closeModal(false),
      // this.props.getPlant()
      )
    .catch ((err) => console.log('error in addNote', err))
  }

  render () {
    return (
      <div className="updateModal">
        <p>Add a new note:</p>
        Date:
        <input type="test" value ={this.state.date} onChange={this.handleDate} />
        Note:
        <input type="test" value ={this.state.note} onChange={this.handleNote} />
            
        <button className='plantButton'>Submit</button>
        
      </div>
    )
  }
}

export default AddDetail;