import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SearchForm from './components/SearchForm/SearchForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import { useState } from 'react';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Orders from './components/Orders/Orders';
import BookDetails from './components/BookDetails/BookDetails';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header loggedInUser={loggedInUser}></Header>
              <SearchForm />
              <Home />
            </Route>
            <Route path="/home">
              <Header loggedInUser={loggedInUser}></Header>
              <SearchForm />
              <Home />
            </Route>
            <PrivateRoute path="/adminPanel">
              <AdminPanel />
            </PrivateRoute>
            <Route path="/login">
              <Header loggedInUser={loggedInUser}></Header>
              <Login />
            </Route>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/BookDetails/:bookId">
              <Header loggedInUser={loggedInUser}></Header>
              <BookDetails />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
