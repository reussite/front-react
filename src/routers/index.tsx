import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page } from './types';
import HomePage from '../app/home/HomePage';


export const pages: Page[] = [
  {path: "/", component: HomePage},
]
const  MyRoutes = ()=> {
  return (
    <BrowserRouter>
      <Routes>    
          {pages.map(({component:Component, path }, index)=>{
            return <Route key={index} element={<Component/>} path={path}> </Route>
          })}   
      </Routes>
    </BrowserRouter>
    
  )
}

export default MyRoutes