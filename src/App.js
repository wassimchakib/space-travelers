import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/rockets" element={<h1>Rocket</h1>} />
        <Route path="/missions" element={<h1>Mission</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/" element={<h1>Rocket</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
