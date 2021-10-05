import logo from './logo.svg';
import './App.css';

// bootstrap css

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';

import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Instractors from './Components/Instractors/Instractors';
import HomeSecondPart from './Components/HomeSecondPart/HomeSecondPart';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>

      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
            <HomeSecondPart></HomeSecondPart>
          </Route>

          <Route path="/Home">
            <Home></Home>
          </Route>

          <Route path="/Courses">
            <Courses></Courses>
          </Route>

          <Route path="/Instractor">
            <Instractors></Instractors>
          </Route>

          <Route path="/About">
            <About></About>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
