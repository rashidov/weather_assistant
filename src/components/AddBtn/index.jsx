import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { showModalAddLocation } from '../../redux/actions/app.action'

import AddLocationForm from './AddLocationForm'
 
import './style.css'

const AddBtn = () => {
  const dispatch = useDispatch()
  const isVisibleModal = useSelector( state => state.app.isVisibleModal )

  const content = (
    <div className="modal__wrpapper--addLocation">
      <AddLocationForm />
    </div>
  )

  return (
    !isVisibleModal ? (
      <button className="add_btn" onClick={() => dispatch(showModalAddLocation(content))}>
        <i class="material-icons">add_circle_outline</i> Добавить
      </button>
    ):(
      <></>
    )
  )
}

export default AddBtn