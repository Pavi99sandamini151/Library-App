import './App.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Navbar from './components/Navbar.js';
import Image from './components/Image';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Booklist from './components/Authorlist';
import Authorlist from './components/Booklist';


function App() {
  return (
    <div className="App">

        <Router>
              <div className="main-container">
              <Navbar/>
              
              <Switch>
                <Route exact path="/">  <Image/></Route> 
                <Route exact path="/home"><Home/></Route>
                <Route exact path="/about" ><AboutUs/></Route>
                <Route exact path="/booklist"><Booklist/></Route>
                <Route exact path="/authorlist" ><Authorlist/></Route>
                {/* <Route exact path="/edit/:id" component={EditPost} />
                <Route exact path="/post/:id" component={PostDetails} /> */}
              </Switch>
              </div>

        </Router>
              

    </div>
  );
}

export default App;
