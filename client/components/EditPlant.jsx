import React from "react";

class EditPlant extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      name: '',
      type: '',
      scientific_name: '',
      zones: '',
      watering: '',
      fruiting_branch: '',
      planted_date: '',
      size: '',
      self_pollinating: '',
      light_exposure: '',
      hardiness_tempf: ''
    };
    this.handleType = this.handleType.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSciname = this.handleSciname.bind(this);
    this.handleZones = this.handleZones.bind(this);
    this.handleWatering = this.handleWatering.bind(this);
    this.handleFruit = this.handleFruit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handlePollinating = this.handlePollinating.bind(this);
    this.handleTemp = this.handleTemp.bind(this);
    this.handleLight = this.handleLight.bind(this);

    this.editPlant = this.editPlant.bind(this);
  }
  
  handleType(event) {
    this.setState({type:event.target.value});
  }
  handleName(event) {
    this.setState({name:event.target.value});
  }
  handleSciname(event) {
    this.setState({scientific_name:event.target.value});
  }
  handleZones(event) {
    this.setState({zones:event.target.value});
  }
  handleWatering(event) {
    this.setState({watering:event.target.value});
  }
  handleFruit(event) {
    this.setState({fruiting_branch:event.target.value});
  }
  handleDate(event) {
    this.setState({planted_date:event.target.value});
  }
  handleSize(event) {
    this.setState({size:event.target.value});
  }
  handlePollinating(event) {
    this.setState({self_pollinating:event.target.value});
  }
  handleLight(event) {
    this.setState({light_exposure:event.target.value});
  }
  handleTemp(event) {
    this.setState({hardiness_tempf:event.target.value});
  }

  // add a new plant and reset state values to empty strings
  editPlant(e){
    console.log(e.target.id)
     fetch( `http://localhost:3000/perennial/${e.target.id}`, {
       method:'PATCH',
       // mode: 'cors',
       body: JSON.stringify({
        name: `${this.state.name}`,
        type: `${this.state.type}`,
        zones: `${this.state.zones}`,
        scientific_name: `${this.state.scientific_name}`,
        watering: `${this.state.watering}`,
        fruiting_branch: `${this.state.fruiting_branch}`,
        planted_date: `${this.state.planted_date}`,
        size: `${this.state.size}`,
        self_pollinating: `${this.state.self_pollinating}`,
        light_exposure: `${this.state.light_exposure}`,
        hardiness_tempf: `${this.state.hardiness_tempf}`
       }),
       headers: {
         'Content-type': 'application/json; charset=UTF-8',
   
       },
     })
     .then(res => res.json())
     .then(editedplant => {
       console.log(editedplant);
       this.props.closeModal(false)
       })
     .catch ((err) => console.log('error in editPlant', err))
   }

  render () {
    return (
      <div className="updateModal">
        <p>Plant Updates</p>
        Name:
        <input type="test" value ={this.state.name} onChange={this.handleName} />

        Scientific Name:
        <input type="test" value ={this.state.scientific_name} onChange={this.handleSciname} />

        Type:<input type="test" value ={this.state.type} onChange={this.handleType} />
        
        Zones:
        <input type="test" value ={this.state.zones} onChange={this.handleZones} />
      
        Watering:<input type="test" value ={this.state.watering} onChange={this.handleWatering} />

        Fruiting Branches:
        <input type="test" value ={this.state.fruiting_branch} onChange={this.handleFruit} />

        Planted Date:
        <input type="test" value ={this.state.planted_date} onChange={this.handleDate} />

        Size:
        <input type="test" value ={this.state.size} onChange={this.handleSize} />
        
        Self-Pollinating:
        <input type="test" value ={this.state.self_pollinating} onChange={this.handlePollinating} />

        Light Exposure:
        <input type="test" value ={this.state.light_exposure} onChange={this.handleLight} />

        Hardiness Temp F
        <input type="test" value ={this.state.hardiness_tempf} onChange={this.handleTemp} />

        
        <button className='plantButton' id={this.props.plantDetails.id} onClick={this.editPlant}>Submit</button>
      </div>
    )
  }
}
export default EditPlant;
