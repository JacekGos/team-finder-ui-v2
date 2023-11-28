import React from "react";
import Topbar from "./components/topbar/Topbar";
import { Container } from "react-bootstrap";
import Filterbar from "./components/filter/Filterbar";
import Events from "./components/events/Events";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            {/* <Topbar /> */}

            <Route
              path="/"
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
