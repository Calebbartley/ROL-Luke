import './App.scss';
import './components/home/Home'
import Home from './components/home/Home';
import NavbarPage from './components/navigation/Navbar'

function App() {
  return (
    <div className='App'>
      <NavbarPage/>
      <Home/>
    </div>
  );
}

export default App;
