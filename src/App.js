import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from 'react';
import './App.css';
import AuthPage from './AuthPage';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const newUser = getUser;

    setUser(newUser);
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Switch>
          <Route exact path="/">
            {user
              ? <Redirect to="/list-page" />
              : <AuthPage setUser={setUser} />
            }
          </Route>
        </Switch>
    
      </div >
    </Router>
  );
}

export default App;
