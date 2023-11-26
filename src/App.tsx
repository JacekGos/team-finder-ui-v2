import React from 'react';
import Topbar from './components/topbar/Topbar';
import { Container } from 'react-bootstrap';
import Filterbar from './components/filter/Filterbar';

function App() {
  return (
    <>
      <Topbar />
      <div style={{ marginTop: 60, maxHeight: '100%' }}>
        <Filterbar />
      </div>
    </>
  );
}

export default App;
