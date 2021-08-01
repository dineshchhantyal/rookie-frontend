import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/jsx/Home';
import Video from './components/jsx/Video';
import Notes from './components/jsx/Notes';
import Student from './components/jsx/Student';
import Admin from './components/jsx/Admin';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/student">
            <Student />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
