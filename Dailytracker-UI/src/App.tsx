import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom';
import Demo from './components/Demo'
import Demo1 from './components/Demo1'
import Dashboard from './layout/Dashboard'


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
