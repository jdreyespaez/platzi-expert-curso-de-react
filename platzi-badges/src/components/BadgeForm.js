import React, {Component} from 'react';

class BadgeForm extends Component {
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    })
  }

  handleClick = e => {
    console.log('Button was clicked')
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('Forma was submitted')
  }


  render() {
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input 
              className="form-control"
              onChange={this.handleChange} 
              type="text"
              name="firstName"
            />

            <button 
              type="submit"
              onClick={this.handleClick} 
              className="btn btn-primary">
                Save
            </button>
          </div>
        </form>
      </div>
    )
  } 
}

export default BadgeForm