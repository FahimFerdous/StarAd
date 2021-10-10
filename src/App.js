
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from './home/Header';
import MainPage from './home/MainPage';
import Footer from './home/Footer';
import AboutUs from './pages/AboutUs';
import Bod from './pages/Bod';
import Management from './pages/Management';
import Contact from './pages/Contact';
import Chairman from './pages/Chairman';
import Md from './pages/Md';
import UnderConstruction from './pages/UnderConstruction';


function App() {
  return (
    <Router>
      <div className="App">


        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/Bod">
            <Bod />
          </Route>
          <Route path="/management">
            <Management />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/chairman">
            <Chairman />
          </Route>
          <Route path="/MD">
            <Md />
          </Route>
          <Route path="/underConstruction">
            <UnderConstruction />
          </Route>
        </Switch>
        <Footer />


      </div>
    </Router>
  );
}

export default App;
