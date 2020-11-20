import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JoinGame from "./components/joinGame";
import StartNewGame from "./components/startNewGame";
import Game from "./components/gameScreen";
import "./cssFiles/styles.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" component={JoinGame} />
        <Route path="/start" component={StartNewGame} />
        <Route path="/game" component={Game} />
      </Switch>
    </Router>
  );
};
const Home = () => {
  return (
    <div>
      <h2>Welcome to Bingo MultiPlayer App</h2>
      <Link to="/join" className="btn btn-primary m-3">
        Join a Game
      </Link>
      <Link to="/start" className="btn btn-primary">
        New Game
      </Link>
    </div>
  );
};
export default App;
