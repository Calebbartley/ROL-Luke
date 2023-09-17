import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/about/AboutUs';
import Navbar from './components/navigation/Navbar';
import ContactUs from './components/contact/ContactUs';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/">{Home}</Route>
        <Route path="/about">{AboutUs}</Route>
        <Route path="/contact">{ContactUs}</Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
