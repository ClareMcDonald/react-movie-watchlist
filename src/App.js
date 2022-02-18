import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser, logout } from './services/fetch-utils.js';
import './App.css';
import AuthPage from './AuthPage';
import WatchlistPage from './WatchlistPage';

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const newUser = getUser;

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
              <button onClick={handleLogout}>Logout</button>
            </>
          }
        </header>
        <Switch>
          <Route exact path="/">
            {user
              ? <Redirect to="/list-page" />
              : <AuthPage setUser={setUser} />
            }
          </Route>
          <Route exact path="/list-page" >
            {user
              ? <WatchlistPage />
              : <Redirect to="/" />
            }
          </Route>
        </Switch>
    
      </div >
    </Router>
  );
}

export default App;
