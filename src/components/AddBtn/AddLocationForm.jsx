import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addLocation } from '../../redux/actions/app.action'

class AddLocationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      cod: ''
    }
  }

  formSubmit = e => {
    e.preventDefault()

    const obj = {
      name: this.state.name,
      cod: this.state.cod
    }

    this.props.addLocation(obj)

    this.setState({
      name: '',
      cod: ''
    })
  }

  inputChange = e => {
    e.persist()
    this.setState(prev => ({...prev, ...{
      [e.target.name]: e.target.value
    }}))
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="modal__wrpapper--addLocation__content">
          <label>Название</label>
          <input onChange={this.inputChange} value={this.state.name} id="name"  name="name" />
        </div>
        <div className="modal__wrpapper--addLocation__content">
          <label>Код</label>
          <input onChange={this.inputChange} value={this.state.cod} id="cod" name="cod" />
        </div>
        <div className="modal__wrpapper--addLocation__btn">
          <button>Сохранить</button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = {
  addLocation
}

export default connect(null, mapDispatchToProps)(AddLocationForm) 