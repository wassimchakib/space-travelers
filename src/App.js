import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Missions from './components/missions';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/rockets" element={<h1>Rocket</h1>} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/" element={<h1>Rocket</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
