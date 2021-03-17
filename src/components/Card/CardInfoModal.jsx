import React from 'react'
import { useSelector } from 'react-redux'

import './style.css'

const CardInfoModal = () => {
  const location = useSelector( state => state.app.infoLocation )

  return (
    <div className="cardInfo__modal">
      <div className="cardInfo__modal--title">Казань</div>
      <div className="cardInfo__modal--content">
        <div className="cardInfo__modal--content__today">
          <div className="cardInfo__modal--content__today--title">
            Сегодня
          </div>
          <div className="cardInfo__modal--content__today--info">
            <div className="cardInfo__modal--content__today--info__weather">
              {location.today.temp}
              <img src={`http://openweathermap.org/img/wn/${location.today.icon}@2x.png`} alt='icon_info' />
            </div>
          </div>
        </div>
        <div className="cardInfo__modal--content__tomorrow">
          <div className="cardInfo__modal--content__tomorrow--title">
            Завтра
          </div>
          <div className="cardInfo__modal--content__tomorrow--info">
            <div className="cardInfo__modal--content__tomorrow--info__weather">
              {location.tomorrow.temp}
              <img src={`http://openweathermap.org/img/wn/${location.tomorrow.icon}@2x.png`} alt='icon_info' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardInfoModal