import React from 'react';
import Topbar from './components/topbar/Topbar';
import { Container } from 'react-bootstrap';
import Filterbar from './components/filter/Filterbar';

function App() {
  return (
    <>
      <Topbar />
      <Filterbar />
    </>
  );
}

export default App;
