import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import Navbar from './components/navbar';
import MissionsPage from './pages/missions/Missions';
import './App.css';
import Rockets from './pages/rockets/Rockets';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route exact path="/" element={<Navigate to="rockets" />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
