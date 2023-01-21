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
import { useContext, useState } from "react";
import ContentRounds from "./pages/contentRounds/ContentRounds";
import ContentLeagues from "./pages/contentLeagues/ContentLeagues";
import ContentTypes from "./pages/contentTypes/ContentTypes";
import Content from "./pages/content/Content";
import Watch from "./pages/watch/Watch";
import SearchedContent from "./pages/searchedContent/SearchedContent";
import LatestContent from "./pages/latestContent/LatestContent";
import UploadContent from "./pages/uploadContent/UploadContent";

function App() {
  const { user } = useContext(AuthContext);

  const [search, setSearch] = useState("");

  const isTokenExpired = (token) => {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  };

  useEffect(() => {
    if (user && JSON.parse(window.localStorage.getItem("user")) !== null) {
      if (
        isTokenExpired(
          JSON.parse(window.localStorage.getItem("user")).accessToken
        )
      ) {
        logOut();
      }
    }
  }, [user]);

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
                  <Navbar setSearch={setSearch} />
                  {search === "" ? (
                    <Home />
                  ) : (
                    <SearchedContent search={search} />
                  )}
                </>
              ) : (
                <Navigate to={"/sign-in"} />
              )
            }
          />

          <Route
            path="/latest-uploads"
            element={
              user ? (
                <>
                  <Navbar setSearch={setSearch} />
                  {search === "" ? (
                    <LatestContent />
                  ) : (
                    <SearchedContent search={search} />
                  )}
                </>
              ) : (
                <Navigate to={"/sign-in"} />
              )
            }
          />

          <Route
            path="/content"
            element={
              user ? <Navigate to={"football"} /> : <Navigate to={"/sign-in"} />
            }
          />

          <Route
            path="/content/:sport"
            element={
              user ? (
                <>
                  <Navbar setSearch={setSearch} />
                  {search === "" ? (
                    <ContentLeagues />
                  ) : (
                    <SearchedContent search={search} />
                  )}
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
                  <Navbar setSearch={setSearch} />
                  {search === "" ? (
                    <ContentRounds />
                  ) : (
                    <SearchedContent search={search} />
                  )}
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
                  <Navbar setSearch={setSearch} />
                  {search === "" ? (
                    <ContentTypes />
                  ) : (
                    <SearchedContent search={search} />
                  )}
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
                  <Navbar setSearch={setSearch} />
                  {search === "" ? (
                    <Content />
                  ) : (
                    <SearchedContent search={search} />
                  )}
                </>
              ) : (
                <Navigate to={"/sign-in"} />
              )
            }
          />

          <Route
            path="/upload-content"
            element={
              user ? <Navigate to={"football"} /> : <Navigate to={"/sign-in"} />
            }
          />

          <Route
            path="/upload-content/:sport"
            element={
              user ? (
                <>
                  <Navbar setSearch={setSearch} />
                  {search === "" ? (
                    <ContentLeagues />
                  ) : (
                    <SearchedContent search={search} />
                  )}
                </>
              ) : (
                <Navigate to={"/sign-in"} />
              )
            }
          />

          <Route
            path="/upload-content/:sport/:league"
            element={
              user ? (
                <>
                  <Navbar setSearch={setSearch} />
                  {search === "" ? (
                    <ContentRounds />
                  ) : (
                    <SearchedContent search={search} />
                  )}
                </>
              ) : (
                <Navigate to={"/sign-in"} />
              )
            }
          />

          <Route
            path="/upload-content/:sport/:league/:round"
            element={
              user ? (
                <>
                  <Navbar setSearch={setSearch} />
                  {search === "" ? (
                    <ContentTypes />
                  ) : (
                    <SearchedContent search={search} />
                  )}
                </>
              ) : (
                <Navigate to={"/sign-in"} />
              )
            }
          />

          <Route
            path="/upload-content/:sport/:league/:round/:type"
            element={
              user ? (
                <>
                  <Navbar />
                  <UploadContent />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/watch"
            element={
              user ? (
                <>
                  <Watch />
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
