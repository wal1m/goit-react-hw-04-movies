import { Route, NavLink, Switch } from "react-router-dom";
import routes from "../../routes";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  Searchbar: {
    top: "0",
    left: "0",
    position: "sticky",
    zIndex: "1100",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    minHeight: "64px",
    marginBottom: "6px",
    paddingRight: "24px",
    paddingLeft: "24px",
    paddingTop: "12px",
    paddingBottom: "12px",
    color: "#fff",
    backgroundColor: "#3f51b5",
    boxShadow:
      "0px 2px 4px -1px rgba(0, 0, 0, 0.2) 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  },

  NavList: {
    display: "flex",
    marginBottom: 0,
  },
});

const AppBar = () => {
  const classes = useStyles();

  return (
    <header className={classes.Searchbar}>
      <nav>
        <ul className={classes.NavList}>
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
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
