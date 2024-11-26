import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import HomePage from './HomePage';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageTrhe from './PageTrhe'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} />
      </Routes>
      <Fragment>
        <PageTwo />
        <PageTrhe />
      </Fragment>
    </Router>
  );
}

export default App;
