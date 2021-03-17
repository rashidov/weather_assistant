import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initialApp, initUserLocation } from './redux/actions/app.action';

import Moadl from './components/Modal';
import Cards from './components/Cards';
import AddBtn from './components/AddBtn';

import './App.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialApp())
  },[])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(initUserLocation(position.coords.latitude, position.coords.longitude))
    })
  },[dispatch])
  
  return (
    <div className="App">
      <Moadl />
      <Cards />
      <AddBtn />
    </div>
  );
}

export default App;