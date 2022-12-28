import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/home/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthContext } from "./authContext/AuthContext";
import { useContext } from "react";
import ContentRounds from "./pages/contentRounds/ContentRounds";
import ContentLeagues from "./pages/contentLeagues/ContentLeagues";
import ContentTypes from "./pages/contentTypes/ContentTypes";
import Content from "./pages/content/Content";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/sign-in"
            element={!user ? <SignIn /> : <Navigate to={"/home"} />}
          />
          <Route
            path="/"
            element={
              user ? <Navigate to="/home" /> : <Navigate to="/sign-in" />
            }
          />
          <Route
            path="/home"
            element={
              user ? (
                <>
                  <Navbar />
                  <Home />
                </>
              ) : (
                <Navigate to={"/sign-in"} />
              )
            }
          />

          <Route
            path="/content"
            element={
              user ? <Navigate to={"Football"} /> : <Navigate to={"/sign-in"} />
            }
          />

          <Route
            path="/content/:sport"
            element={
              user ? (
                <>
                  <Navbar />
                  <ContentLeagues />
                </>
              ) : (
                <Navigate to={"/sign-in"} />
              )
            }
          />

          <Route
            path="/content/:sport/:league"
            element={
              user ? (
                <>
                  <Navbar />
                  <ContentRounds />
                </>
              ) : (
                <Navigate to={"/sign-in"} />
              )
            }
          />

          <Route
            path="/content/:sport/:league/:round"
            element={
              user ? (
                <>
                  <Navbar />
                  <ContentTypes />
                </>
              ) : (
                <Navigate to={"/sign-in"} />
              )
            }
          />

          <Route
            path="/content/:sport/:league/:round/:type"
            element={
              user ? (
                <>
                  <Navbar />
                  <Content />
                </>
              ) : (
                <Navigate to={"/sign-in"} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
