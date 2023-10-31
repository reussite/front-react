import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page } from './types';
import HomePage from '../pages/home/HomePage';
import Navbar from '../components/Navbar/Navbar';
import DecouvertePage from '../pages/decouverte/DecouvertePage';
import LoginPage from '../pages/login/LoginPage';


export const pages: Page[] = [
  {path: "/", component: HomePage},
  {path: "/decouverte", component: DecouvertePage},
  {path: "/login", component: LoginPage}
]
const  MyRoutes = ()=> {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>    
          {pages.map(({component:Component, path }, index)=>{
            return <Route key={index} element={<Component/>} path={path}> </Route>
          })}   
      </Routes>
    </BrowserRouter>
    
  )
}

export default MyRoutes