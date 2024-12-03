import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import HomePage from './HomePage';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
//import PageTrhe from './PageTrhe'
//mport Livelo from './livelo'




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/baixar" element={<PageTwo />} />
      </Routes>
      <Fragment>
      </Fragment>
    </Router>
  );
}

export default App;
