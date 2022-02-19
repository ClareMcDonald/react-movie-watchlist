import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser, logout } from './services/fetch-utils.js';
import './App.css';
import AuthPage from './AuthPage';
import WatchlistPage from './WatchlistPage';
import SearchPage from './SearchPage.js';

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const newUser = getUser();

    setUser(newUser);
  }, []);

  async function handleLogout() {
    logout();

    setUser('');
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {user &&
            <>
              <NavLink to="/watchlist">WatchList Page</NavLink>
              <NavLink to="/search">Search Page</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </>
          }
        </header>
        <Switch>
          <Route exact path="/">
            {user
              ? <Redirect to="/watchlist" />
              : <AuthPage setUser={setUser} />
            }
          </Route>
          <Route exact path="/watchlist" >
            {user
              ? <WatchlistPage />
              : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/search" >
            {user
              ? <SearchPage />
              : <Redirect to="/" />
            }
          </Route>
        </Switch>
      </div >
    </Router>
  );
}

export default App;
