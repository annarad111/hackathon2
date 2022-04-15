import './App.css';
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import NotFound from './features/errors/NotFound';
import ServerError from './features/errors/ServerError';
import Login from './pages/account/Login';
import Register from './pages/account/Register';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
       <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/not-found' component={NotFound}></Route>
        <Route exact path='/server-error' component={ServerError}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        </Switch>
      <Footer/>
        
    </div>
  );
}

// export default App;