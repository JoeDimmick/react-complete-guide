import { useState } from 'react';

import Header from './components/header/Header.jsx';
import CoreConcepts from './components/coreconcepts/CoreConcepts.jsx';
import Examples from './components/examples/Examples.jsx';

function App() {

  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples />
      </main>
    </>
  );
}

export default App;
