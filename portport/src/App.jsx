
import Intro from './components/intro/Intro';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import Admin from './components/Admin/Admin';
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
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Articles" element={<Articles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
