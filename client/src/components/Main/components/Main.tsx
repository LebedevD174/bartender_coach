import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// Компонент главной страницы
function Main(): JSX.Element {
    return (
    <div className="wrapper">
        <Navbar />
        <Outlet/>
    </div>
    );
   }

export default Main