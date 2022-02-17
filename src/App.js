import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import AuthPage from './AuthPage';

function App() {
  const [user, setUser] = useState('');

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Switch>
          <Route>
            <AuthPage setUser={setUser}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
