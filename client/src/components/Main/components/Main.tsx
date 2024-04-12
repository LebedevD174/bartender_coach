import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

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