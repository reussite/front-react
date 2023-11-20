import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyRoutes from './routers';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  /* const location = useLocation();
  const isNavbarVisible = location.pathname !=='/login'; */
  return (
    <div className="">
      {/* {isNavbarVisible && <Navbar />} */}
       <MyRoutes />
    </div>
  );
}

export default App;
