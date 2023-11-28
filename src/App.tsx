import React from "react";
import Topbar from "./components/topbar/Topbar";
import { Container } from "react-bootstrap";
import Filterbar from "./components/filter/Filterbar";
import Events from "./components/events/Events";

function App() {
  return (
    <>
      <Topbar />
      <Container
        fluid
        style={{ marginTop: 60, maxHeight: "100%", backgroundColor: "#1D2125" }}
      >
        <Filterbar />
        <Events />
      </Container>
    </>
  );
}

export default App;
