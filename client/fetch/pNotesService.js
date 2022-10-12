
  //add a new plant note and reset state values to empty strings
  export const addDetail = (e) => {
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