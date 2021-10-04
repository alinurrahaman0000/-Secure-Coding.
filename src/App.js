
import { BrowserRouter as Router, Switch , Route, } from "react-router-dom";

import './App.css';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from './Components/Footer/Footer';
import Hader from './Components/Hader/Hader';
import Navbar from "./Components/Navber/Navbar";
import Services from "./Components/Services/Services";
import NoData from "./NoData/NoData";



function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar></Navbar>
    
          <Switch>
          <Route exact path="/">
              <Hader></Hader>
          </Route>
          <Route exact path="/home">
              <Hader></Hader>
          </Route>
          <Route path="/services">
              <Services></Services>
          </Route>
          <Route path="/about">
              <About></About>
          </Route>
          <Route path="/contact">
             <Contact></Contact>
          </Route><Route path="*">
             <NoData></NoData>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    
    
    </div>
  );
}

export default App;
