import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Navbar from './components/Shared/Navbar/Navbar';
import LogIn from './components/Login/Login/LogIn';
import Home from './components/Home/Home/Home';
import Admin from './components/Admin/Admin/Admin';
import UserDashBoard from './components/User/UserDashBord/UserDashBoard';
import Book from './components/User/Book/Book';
import Review from './components/Home/Review/Review';
import BookingList from './components/User/BookingList/BookingList';
import UserReview from './components/User/UserReview/UserReview';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';


export const UserContext=createContext() ;
function App() {
  const [loggedInUser,setLoggedInUser]= useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <div className="App background">
      <Navbar></Navbar>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <PrivateRoute path="/userDashboard">
            <UserDashBoard></UserDashBoard>
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <Book></Book>
          </PrivateRoute>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/review">
            <UserReview></UserReview>
          </Route>
          <Route path="/login">
        <LogIn></LogIn>
          </Route>
        </Switch>
      </div>
    </Router>
    
    </UserContext.Provider>
  );
}

export default App;
