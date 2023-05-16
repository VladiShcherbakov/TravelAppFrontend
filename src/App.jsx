import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AddTripInfo, HomePage, PlanningPage, SearchPage, TripPlan } from './pages';
import LocationContext from "./context";
import useGeolocation from "./hooks/useGeolocation";
import Map from './pages/mapTest/mapTest';

function App() {
  const location = useGeolocation();

  return (
    <div>
      <LocationContext.Provider value={location}>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/planning' element={<PlanningPage />}/>
          <Route path='/search' element={<SearchPage />}/>
          <Route path='/trip/:tripId' element={<TripPlan />}/>
          <Route path='/map' element={<Map />} />
          <Route path='/info/:tripId/:xid' element={<AddTripInfo />}/>
          </Routes>
        </BrowserRouter>
      </LocationContext.Provider>
    </div>
  );
}

export default App;
