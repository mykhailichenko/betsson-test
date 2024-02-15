import React from 'react';

import {Routes, Route, Link} from "react-router-dom";

import Layout from './components/Layout';

function App() {
  return (
      <>
        <Routes>
            <Route path='/' element={<Layout />}>
                {/*<Route index element={} />*/}
                {/*<Route path='*' element={} />*/}
            </Route>
        </Routes>
      </>
  );
}

export default App;
