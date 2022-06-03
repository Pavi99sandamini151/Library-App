import './App.css';
import Navbar from './components/Navbar.js';
import Image from './components/Image';
import Home from './components/Home';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">

      <Navbar />
      <div class="image-container">
      <Image />
      </div>
      <Home></Home>
      <AboutUs></AboutUs>
      

    </div>
  );
}

export default App;
