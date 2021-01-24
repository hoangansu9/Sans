import React from 'react';
import { Provider } from 'react-redux';
import Game from './component/Game';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './component/HomePage';
const App = ({ store }) => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
        <hr />
        <div className="main-route-place">
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game}>
            <Provider store={store}>
              <Game />
            </Provider>
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
