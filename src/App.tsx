import React from "react";
import Topbar from "./components/topbar/Topbar";
import { Container } from "react-bootstrap";
import Filterbar from "./components/filter/Filterbar";
import Events from "./components/events/Events";
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import Login from "./components/auth/Login";
import MainLayout from "./layout/MainLayout";
import Register from "./components/auth/Register";
import { FilterProvider } from "./context/filter-context/FilterContext";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/signin"
            element={
              <>
                <Topbar />
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Topbar />
                <Register />
              </>
            }
          />
          <Route
            path="/"
            element={
              <FilterProvider>
                <MainLayout />
              </FilterProvider>
            }
          >
            <Route index element={<Navigate to="/events" />} />
            <Route
              path="/events"
              element={
                <div
                  style={{
                    marginTop: 60,
                    maxHeight: "100%",
                    backgroundColor: "#1D2125",
                  }}
                >
                  <Filterbar />
                  <Events />
                </div>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
