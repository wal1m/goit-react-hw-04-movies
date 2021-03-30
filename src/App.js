import React, { lazy, Suspense } from "react";

import { Route, NavLink, Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import routes from "./routes";
const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {/* <ul>
        <li>
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul> */}
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route component={HomePage} />
      </Switch>
    </Suspense>
  );
}

export default App;
