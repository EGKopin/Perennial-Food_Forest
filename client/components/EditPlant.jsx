import React from "react";

function Modal ({ closeModal }) {

  return (
  <div className="test">
    <div className="editPlantContainer">
      <button onClick={() => closeModal(false)}>X</button>
      <div className="title">cat</div>
      <div className="body"></div>
    </div>
      </div>
  )
}

// class EditPlant extends React.Component {
//   constructor (props){
//     super(props);
//     this.state = {
//       type: '',
//       name: '',
//       planted_date: ''
//     };
//     this.handleType = this.handleType.bind(this);
//     this.handleName = this.handleName.bind(this);
//     this.editPlant = this.editPlant.bind(this);
//   }
  
//   handleType(event) {
//     this.setState({type:event.target.value});
//   }

//   handleName(event) {
//     this.setState({name:event.target.value});
//   }

  //add a new plant and reset state values to empty strings
  // addPlant(){
  //   console.log('add plant')
  //   fetch('http://localhost:3000/perennial', {
  //     method:'POST',
  //     mode: 'cors',
  //     body: JSON.stringify({
  //       name: `${this.state.name}`,
  //       type: `${this.state.type}`,
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //   .then(res => res.json())
  //   .then(addedplant => {
  //     console.log(addedplant)
  //     })
  //     .then(this.setState({
  //       type: '',
  //       name: '',
  //       planted_date: ''
  //     }),
  //     this.props.getPlant()
  //     )
  //   .catch ((err) => console.log('error in getPlant', err))
  // }

//   render () {
//     return (
//       <div>
//         <p>Make your changes:</p>
//         <label>Type:
//         <input type="test" value ={this.state.type} onChange={this.handleType} />
//         Name:
//         <input type="test" value ={this.state.name} onChange={this.handleName} />
//         </label>
//         <div className="words-sd"></div>
//         <button className='plantButton'  onClick={this.addPlant}>Submit</button>
//       </div>
//     )
//   }
// }
// export default EditPlant;
export default Modal;