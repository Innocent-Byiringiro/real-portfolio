
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Articles from './components/Articles/Articles';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Articles" element={<Articles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
