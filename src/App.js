import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Switch>
          <Route>
            <AuthPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
