import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Components/Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
    <Sidebar></Sidebar>
    {/* <Dashboard></Dashboard> */}
    </React.Fragment>
  );
}

export default App;
