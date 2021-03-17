import { 
  ADD_LOCATION, 
  DELETE_LOCATION, 
  FLAG_ADD, 
  FLAG_GET, 
  GET_INFO_LOCATION, 
  HIDE_LOADER, 
  HIDE_MODAL, 
  INIT, 
  INIT_USER, 
  MODAL_CONTENT, 
  SHOW_LOADER, 
  SHOW_MODAL 
} from "../types"

const content = ( <div>...</div> )

const initState = {
  locations: [],
  userLocation: {},
  infoLocation: {},
  loading: false,
  isVisibleModal: false,
  contentModal: content,
  flagModal: false
}

export const appReducer = ( state = initState, action ) => {
  switch(action.type) {
    case INIT:
      if(action.payload){
        action.payload.main.temp = Math.floor(action.payload.main.temp)
      }
      return { ...state, locations: state.locations.concat([action.payload])}
    case INIT_USER:
      if (action.payload){ 
        action.payload.name = 'Моё местоположение'
        action.payload.main.temp = Math.floor(action.payload.main.temp)
        action.payload.isDeleted = false
        return { ...state, locations: state.locations[0] = [action.payload], userLocation: action.payload }
      } else {
        return { ...state, userLocation: action.payload }
      }
    case SHOW_LOADER:
      return { ...state, loading: true }
    case HIDE_LOADER: 
      return { ...state, loading: false }
    case MODAL_CONTENT:
      return { ...state, contentModal: action.payload }
    case SHOW_MODAL:
      return { ...state, isVisibleModal: true }
    case HIDE_MODAL:
      return { ...state, isVisibleModal: false, contentModal: content }
    case ADD_LOCATION: 
      if (action.payload){
        action.payload.isDeleted = true
        action.payload.main.temp = Math.floor(action.payload.main.temp)
      }
      return { ...state, locations: state.locations.concat([action.payload]) }
    case DELETE_LOCATION:
      const array = []
      state.locations.forEach((location, index) => {
        if (index !== action.payload){
          array.push(location)
        } else {
          return
        }
      })
      return { ...state, locations: array }
    case GET_INFO_LOCATION:
      if(action.payload) {
        console.log(action.payload)
        action.payload.daily[0].temp.day = Math.floor(action.payload.daily[0].temp.day)
        action.payload.daily[1].temp.day = Math.floor(action.payload.daily[1].temp.day)
      }
      return { 
        ...state, 
        infoLocation: {  
          today: {
            temp: action.payload.daily[0].temp.day,
            icon: action.payload.daily[0].weather[0].icon
          },
          tomorrow: {
            temp: action.payload.daily[1].temp.day,
            icon: action.payload.daily[1].weather[0].icon
          }
        } 
      }
    case FLAG_ADD: 
      return { ...state, flagModal: false }
    case FLAG_GET:
      return { ...state, flagModal: true }
    default: return state
  }
}