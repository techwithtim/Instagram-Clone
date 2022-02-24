import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AllPosts from "./AllPosts";
import AlertDismissible from "./AlertDismissible";
import CreatePost from "./CreatePost";
import Login from "./Login";
import Profile from "./Profile";
import Search from "./Search";
import SignUp from "./SignUp";
import "../css/App.css";

function App() {
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState("");

  return (
    <div className="fill-parent">
      <BrowserRouter>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container fluid>
            <LinkContainer to="/">
              <Navbar.Brand>Instagram Clone</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Feed</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/search">
                  <Nav.Link>Search</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/create-post">
                  <Nav.Link>Post</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                {user ? (
                  <Navbar.Text>
                    Signed in as: <Link to={"/profile/" + user}>{user}</Link> |{" "}
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => {
                        setUser("");
                        setAlert({
                          variant: "warning",
                          message: "You are now signed out!",
                        });
                      }}
                    >
                      Logout
                    </Button>
                  </Navbar.Text>
                ) : (
                  <Navbar.Text>
                    <Link to="/login">Not Signed In</Link>
                  </Navbar.Text>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {alert ? (
          <AlertDismissible {...alert} deleteAlert={() => setAlert(null)} />
        ) : null}
        <Routes>
          <Route element={<AllPosts user={user} />} path="/" exact />
          <Route
            element={<Login setAlert={setAlert} setUser={setUser} />}
            path="/login"
          />
          <Route
            element={<SignUp setAlert={setAlert} setUser={setUser} />}
            path="/sign-up"
          />
          <Route
            element={<Profile user={user} setAlert={setAlert} />}
            path="/profile/:username"
          />
          <Route element={<Search />} path="/search" />
          <Route
            element={<CreatePost user={user} setAlert={setAlert} />}
            path="/create-post"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
