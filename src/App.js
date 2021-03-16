//import logo from './logo.svg';
import './App.css';
import routes from './routes';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Video from "./components/Video";

function App() {
  //const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path={routes.video}>
            <Video />
          </Route>
          <Route path={routes.home}>
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
