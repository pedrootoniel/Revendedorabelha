import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import HomePage from './HomePage';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
//import PageTrhe from './PageTrhe'
import Livelo from './livelo'
import Catalago from './catalago'





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/baixar" element={<PageTwo />} />
        <Route path="/catalago" element={<Catalago />} />
      </Routes>
      <Fragment>
        <Livelo/>
      </Fragment>
    </Router>
  );
}

export default App;
