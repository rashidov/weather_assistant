import { 
  ADD_LOCATION, 
  DELETE_LOCATION, 
  FLAG_ADD, FLAG_GET, 
  GET_INFO_LOCATION, 
  HIDE_LOADER, 
  HIDE_MODAL, 
  INIT, 
  INIT_USER, 
  MODAL_CONTENT, 
  SHOW_LOADER, 
  SHOW_MODAL 
} from "../types"

function showLoader() {
  return { type: SHOW_LOADER }
}

function hideLoader() {
  return { type: HIDE_LOADER }
}

export function shwoModal() {
  return { type: SHOW_MODAL }
}

export function hideModal() {
  return { type: HIDE_MODAL }
}

export function initialApp() {
  return async dispatch => {
    dispatch(showLoader())
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=52.5244&lon=13.4105&units=metric&lang=ru&appid={Api TOKEN}'
    const result = await fetch(url).then( response => { return response.json()})
    dispatch({ type: INIT, payload: result })
    dispatch(hideLoader())
  }
}

export function initUserLocation(lat, lon) {
  return async dispatch => {
    const key = '{Api TOKEN}'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${key}`
    const userLocation = await fetch(url).then( response => { return response.json()})
    dispatch({ type: INIT_USER, payload: userLocation })
  }
}

export function showModalAddLocation(content) {
  return async dispatch => {
    dispatch(shwoModal())
    dispatch({ type: FLAG_ADD })
    dispatch({ type: MODAL_CONTENT, payload: content })
  }
}

export function addLocation(city) {
  return async dispatch => {
    const key = '{Api TOKEN}'
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${city.cod}&units=metric&lang=ru&appid=${key}`
    const result = await fetch(url).then( response => { return response.json()})
    dispatch(hideModal())
    if(result) { result.name = city.name }
    dispatch({ type: ADD_LOCATION, payload: result})
  }
}

export function deleteLocation(index) {
  return { type: DELETE_LOCATION, payload: index }
} 

export function showModalInfoLocation(location, content) {
  return async dispatch => {
    const key = '{Api TOKEN}'
    const part = 'current,minutely,hourly,alerts'
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coord.lat}&lon=${location.coord.lon}&exclude=${part}&units=metric&lang=ru&appid=${key}`
    const result = await fetch(url).then( response => { return response.json()})
    dispatch({ type: GET_INFO_LOCATION, payload: result })
    dispatch(shwoModal())
    dispatch({ type: FLAG_GET })
    dispatch({ type: MODAL_CONTENT, payload: content })
    dispatch(hideLoader())
  }
}
