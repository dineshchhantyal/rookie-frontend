import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Notes from './pages/Notes';
import Teams from './pages/Teams';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="app w-full h-screen text-gray-50 bg-gray-800">
      <Router>
        <Switch>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/team">
            <Teams />
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
