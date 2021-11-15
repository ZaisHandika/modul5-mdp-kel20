import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdOutlineAccountCircle } from "react-icons/md";
import "./App.css";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 20
        </p>
      </header>
      <Switch>
      <Route path="/" exact>
          <Redirect to="Movie" />
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" />
          Movie
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdOutlineAccountCircle className="icon" />
          Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
