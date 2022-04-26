import React from "react";
import createRoot from "react-dom";
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
createRoot.render(
	// <React.StrictMode>
		
			<App />,
		
	// </React.StrictMode>,
	document.getElementById('root'),
);
