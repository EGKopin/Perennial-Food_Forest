export const getPlant = () => {
    // console.log('click');
    fetch('http://localhost:3000/perennial')
      .then(res => res.json())
      .then(plants => {
        plants.sort((a,b) => a._id - b._id)
        this.setState({plants: plants})
        })
      .catch ((err) => console.log('error in getPlant', err))
  }

export const editPlant = (e) => {
  console.log(e.target.id)
   fetch( `http://localhost:3000/perennial/${e.target.id}`, {
     method:'PATCH',
     // mode: 'cors',
     body: JSON.stringify({
       name: 'fooca',
       type: 'basdfdsr',
       zones: '1-4'
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
 
     },
   })
   .then(res => res.json())
   .then(editedplant => {
     console.log(editedplant)
     // this.getPlant();
     })
   .catch ((err) => console.log('error in editPlant', err))
 }


//deletes a specific id number from the req.params/:id, so need to grab that id to pass into the fetch requrest
export const deletePlant = (event) => {
  console.log('delete plant', event.target.id)
  const toDelete = event.target.id
  const confirm = window.confirm('Do you really want to delete all your hard work?')
  if (confirm){
  fetch(`http://localhost:3000/perennial/${toDelete}`, {
    method:'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(res => res.json())
  .then(deletedplant => {
    console.log(deletedplant);
      // this.getPlant()
    })
  .catch ((err) => console.log('error in editPlant', err))
  }
}

export const getDetails = (e)=>{
  fetch(`http://localhost:3000/perennial/${e.target.id}`)
  .then(res => res.json())
  .then(details => {
    details.sort((a,b) => a._id - b._id);
    console.log(details);
    this.setState({currentDetails: details})
    })
  .catch ((err) => console.log('error in getDetails', err))
}


  // exports.module