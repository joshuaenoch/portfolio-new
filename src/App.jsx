import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Journal from './pages/Journal';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
