import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import { useState } from 'react';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Orders from './components/Orders/Orders';
import BookDetails from './components/BookDetails/BookDetails';
import Footer from './components/Footer/Footer';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
          <Route
                exact
                path="/"
                render={() => {
                    return (
                      loggedInUser.email ?
                      <Redirect to="/adminPanel" /> :
                      <Redirect to="/login" /> 
                    )
                }}
              />
            <Route exact path="/">
              <Header></Header>
              <Home />
              <Footer />
            </Route>
            <Route path="/home">
              <Header></Header>
              <Home />
              <Footer />
            </Route>
            <PrivateRoute path="/adminPanel">
              <AdminPanel />
            </PrivateRoute>
            <Route path="/login">
              <Header></Header>
              <Login />
            </Route>
            <PrivateRoute path="/orders">
              <Header></Header>
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/BookDetails/:bookId">
              <Header></Header>
              <BookDetails />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
