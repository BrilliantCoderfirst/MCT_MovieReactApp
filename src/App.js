import './App.css';
import Login from './pages/Login';
import MovieDetails from './pages/MovieDetails';
import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (
    <>

      {location.pathname == "/" ? <Login /> : ""}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
      </Routes>

    </>
  );
}

export default App;
