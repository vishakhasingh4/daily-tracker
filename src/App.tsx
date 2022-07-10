import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import Demo from "./components/Demo/Demo";
import Dashboard from "./layout/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Demo />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
