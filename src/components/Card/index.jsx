import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteLocation, showModalInfoLocation } from '../../redux/actions/app.action'

import CardInfoModal from './CardInfoModal'
 
import './style.css'

const Card = ({ data, index }) => {
  const dispatch = useDispatch()
  const isVisibleModal = useSelector( state => state.app.isVisibleModal )

  const content = (
    <div className="modal__wrpapper--infoLocation">
      <CardInfoModal data={data} />
    </div>
  )

  return (
    <div className="card__wrapper">
      <div className="card__wrapper--container" onClick={() => dispatch(showModalInfoLocation(data, content))}>
        <div className="card__wrapper--title">
          {data.name}
        </div>
        <div className="card__wrapper--info">
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='icon_weather' />
          {data.main.temp}&deg;C
        </div>
      </div>
      {!isVisibleModal ? (
        data.isDeleted ? (
          <div className="card__wrapper--delete" >
            <i className="material-icons" onClick={() => dispatch(deleteLocation(index))} >delete_outline</i>
          </div>
        ):(
          <></>
        )
      ):(
        <></>
      )}
    </div>
  )
}

export default Card