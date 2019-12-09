import React, {Component} from 'react';

class BadgeForm extends Component {
  // (i) Inicializar el estado
  state={}

  // (ii) Usando .setState({}) se crea el objeto que guardará el name:value
  // 16- YA NO SE USA ESTE handleChange, pues viene del componente papá, papá!
  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // }

  handleClick = e => {
    console.log('Button was clicked')
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('Forma was submitted')
    console.log(this.state)
  }


  render() {
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          {/* (iii) Mediante value será posible llamar el método hecho a medida
                    y la parte específica del state que lo guardará. */}
          <div className="form-group">
            <label>First Name</label>
            <input 
              className="form-control"
              // 16- Aquí estoy pasando el .props desde el papá, papá! Es decir:
              // BadgeNew.js tu papá, como el Junior que no fue en 2019, perdió contra el América de Cali la final del FPC 
              onChange={this.props.onChange} 
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              className="form-control"
              onChange={this.props.onChange} 
              type="text"
              name="lastName"
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              className="form-control"
              onChange={this.props.onChange} 
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>
            
          <div className="form-group">
            <label>Job Title</label>
            <input 
              className="form-control"
              onChange={this.props.onChange} 
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter handle</label>
            <input 
              className="form-control"
              onChange={this.props.onChange} 
              type="text"
              name="twitter"
              value={this.state.twitter}
            />
          </div>

          <div className="form-group">
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