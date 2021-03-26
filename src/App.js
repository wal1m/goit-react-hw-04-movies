import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage"
// import './App.css';

import { Route, NavLink, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="movies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            MoviesPage
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
