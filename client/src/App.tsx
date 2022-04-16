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
import Jobpage from './pages/job/Jobpage';
import { useState, useCallback, useEffect } from 'react';
import LoadingComponent from './components/LoadingComponent';
import { useAppDispatch } from './features/store/configureStore';
import { fetchCurrentUser } from './pages/account/accountSlice';
import { fetchJobsAsync } from './pages/job/jobSlice';
import Meetings from './pages/meetings/Meetings';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/profile/Profile';

export default function App() {

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchJobsAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch])

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp])

    if(loading) return <LoadingComponent message="Loading.."></LoadingComponent>
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
        <Route exact path='/jobs' component={Jobpage}></Route>
        <Route exact path='/meetings' component={Meetings}></Route>
        {/* <PrivateRoute path='/applications' component={Applications} /> */}
        <PrivateRoute path='/profile' component={Profile} />
        </Switch>
      <Footer/>
        
    </div>
  );
}

// export default App;