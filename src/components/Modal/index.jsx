import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { hideModal } from '../../redux/actions/app.action'
 
import './style.css'

const Moadl = () => {
  const dispatch = useDispatch()
  const isVisble = useSelector( state => state.app.isVisibleModal )
  const flag = useSelector( state => state.app.flagModal )
  const content = useSelector( state => state.app.contentModal)

  return (
    <div className={isVisble ? "modal__wrpapper modal__active" : "modal__wrpapper"}>
      <div className="modal__wrpapper--close" onClick={() => dispatch(hideModal())}>
        <i className="material-icons">close</i>
      </div>
      <div className={!flag ? "modal__wrpapper--contentAdd" : "modal__wrpapper--contentInf"} >
        {content}
      </div>
    </div>
  )
}

export default Moadl