import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Page } from "./types";
import HomePage from "../pages/home/HomePage";
import DecouvertePage from "../pages/decouverte/DecouvertePage";
import LoginPage from "../pages/login/LoginPage";
import Notfound from "../pages/404/Notfound";

export const pages: Page[] = [
  { path: "/", component: HomePage },
  { path: "/decouverte", component: DecouvertePage },
  { path: "/login", component: LoginPage },
  {path: "*", component: Notfound}
];
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/decouverte" element={<DecouvertePage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
